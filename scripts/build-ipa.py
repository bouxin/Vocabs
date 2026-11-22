#!/usr/bin/env python3
"""Generate IPA (General American) for every card phrase.

Source of truth: the CMU Pronouncing Dictionary (public domain).
Output: src/data/ipa.ts — one `phrase|transcription` line per card.

The dictionary gives ARPAbet with stress digits (AH0, IH1, ...). This script
turns that into learner-dictionary style IPA:

  * schwa for unstressed AH/ER (əˈbɪləti, ˈnʌmbɚ),
  * ˈ and ˌ placed at the start of the stressed syllable, using English
    onset rules (əˈbɪ.lə.ti, not ə.bɪl.ˈə.ti),
  * weak forms for function words, so phrases read naturally
    ("a number of" -> ə ˈnʌmbɚ əv, not ˈeɪ ˈnʌmbɚ ˈʌv).

Run from the repository root:  python3 scripts/build-ipa.py
"""

import os
import re
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, 'scripts', '.cache', 'cmudict-0.7b')
CMU_URL = 'https://raw.githubusercontent.com/Alexir/CMUdict/master/cmudict-0.7b'
OUT = os.path.join(ROOT, 'src', 'data', 'ipa.ts')

# --------------------------------------------------------------------------
# ARPAbet -> IPA
# --------------------------------------------------------------------------

VOWELS = {
    'AA', 'AE', 'AH', 'AO', 'AW', 'AY', 'EH', 'ER', 'EY',
    'IH', 'IY', 'OW', 'OY', 'UH', 'UW',
}

IPA = {
    'AA': 'ɑ', 'AE': 'æ', 'AH': 'ʌ', 'AO': 'ɔ', 'AW': 'aʊ', 'AY': 'aɪ',
    'EH': 'ɛ', 'ER': 'ɝ', 'EY': 'eɪ', 'IH': 'ɪ', 'IY': 'i', 'OW': 'oʊ',
    'OY': 'ɔɪ', 'UH': 'ʊ', 'UW': 'u',
    'B': 'b', 'CH': 'ʧ', 'D': 'd', 'DH': 'ð', 'F': 'f', 'G': 'ɡ', 'HH': 'h',
    'JH': 'ʤ', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'NG': 'ŋ', 'P': 'p',
    'R': 'r', 'S': 's', 'SH': 'ʃ', 'T': 't', 'TH': 'θ', 'V': 'v', 'W': 'w',
    'Y': 'j', 'Z': 'z', 'ZH': 'ʒ',
}

# --------------------------------------------------------------------------
# Legal English onsets, for syllable division
# --------------------------------------------------------------------------

SINGLE_ONSETS = {
    'P', 'B', 'T', 'D', 'K', 'G', 'F', 'V', 'TH', 'DH', 'S', 'Z', 'SH', 'ZH',
    'CH', 'JH', 'M', 'N', 'L', 'R', 'W', 'Y', 'HH',
}
TWO_ONSETS = {
    ('P', 'L'), ('P', 'R'), ('P', 'Y'), ('B', 'L'), ('B', 'R'), ('B', 'Y'),
    ('T', 'R'), ('T', 'W'), ('T', 'Y'), ('D', 'R'), ('D', 'W'), ('D', 'Y'),
    ('K', 'L'), ('K', 'R'), ('K', 'W'), ('K', 'Y'),
    ('G', 'L'), ('G', 'R'), ('G', 'W'), ('G', 'Y'),
    ('F', 'L'), ('F', 'R'), ('F', 'Y'), ('TH', 'R'), ('TH', 'W'),
    ('S', 'P'), ('S', 'T'), ('S', 'K'), ('S', 'M'), ('S', 'N'), ('S', 'L'),
    ('S', 'W'), ('S', 'F'), ('S', 'Y'), ('SH', 'R'), ('HH', 'Y'),
    ('V', 'Y'), ('M', 'Y'), ('N', 'Y'), ('L', 'Y'), ('R', 'Y'),
}
THREE_ONSETS = {
    ('S', 'P', 'L'), ('S', 'P', 'R'), ('S', 'P', 'Y'),
    ('S', 'T', 'R'), ('S', 'T', 'Y'),
    ('S', 'K', 'L'), ('S', 'K', 'R'), ('S', 'K', 'W'), ('S', 'K', 'Y'),
}


def is_onset(bases):
    if len(bases) == 1:
        return bases[0] in SINGLE_ONSETS
    if len(bases) == 2:
        return tuple(bases) in TWO_ONSETS
    if len(bases) == 3:
        return tuple(bases) in THREE_ONSETS
    return False


# --------------------------------------------------------------------------
# Function words: weak forms, no stress mark
# --------------------------------------------------------------------------

WEAK = {
    'a': 'ə', 'an': 'ən', 'the': 'ðə',
    'of': 'əv', 'to': 'tə', 'and': 'ənd', 'or': 'ɚ', 'but': 'bət',
    'as': 'əz', 'than': 'ðən',
    'at': 'ət', 'in': 'ɪn', 'on': 'ɑn', 'for': 'fɚ', 'from': 'frəm',
    'with': 'wɪð', 'by': 'baɪ', 'into': 'ˈɪntu',
    'is': 'ɪz', 'are': 'ɚ', 'was': 'wəz', 'were': 'wɚ', 'am': 'əm',
    'be': 'bi', 'been': 'bɪn',
    'have': 'həv', 'has': 'həz', 'had': 'həd',
    'can': 'kən', 'could': 'kʊd', 'would': 'wʊd', 'should': 'ʃʊd',
    'will': 'wɪl', 'some': 'səm',
    'you': 'ju', 'your': 'jʊr', 'our': 'ɑr',
    'them': 'ðəm', 'us': 'əs', 'her': 'hɚ', 'his': 'hɪz',
    'there': 'ðɛr', 'their': 'ðɛr',
}

# British spellings used by the published lists: look up the American entry.
BRITISH = {
    'organising': 'organizing', 'organised': 'organized',
    'organisation': 'organization', 'organisations': 'organizations',
    'behaviour': 'behavior', 'behaviours': 'behaviors',
    'behavioural': 'behavioral', 'analyse': 'analyze', 'analysed': 'analyzed',
    'analysing': 'analyzing', 'analysis': 'analysis',
    'colour': 'color', 'colours': 'colors', 'favour': 'favor',
    'favourite': 'favorite', 'labour': 'labor', 'centre': 'center',
    'centred': 'centered', 'programme': 'program', 'programmes': 'programs',
    'recognise': 'recognize', 'recognised': 'recognized',
    'recognising': 'recognizing', 'emphasise': 'emphasize',
    'emphasised': 'emphasized', 'emphasising': 'emphasizing',
    'summarise': 'summarize', 'summarised': 'summarized',
    'summarising': 'summarizing', 'characterise': 'characterize',
    'characterised': 'characterized', 'criticise': 'criticize',
    'criticised': 'criticized', 'realise': 'realize', 'realised': 'realized',
    'utilise': 'utilize', 'utilised': 'utilized', 'minimise': 'minimize',
    'minimised': 'minimized', 'maximise': 'maximize', 'maximised': 'maximized',
    'prioritise': 'prioritize', 'prioritised': 'prioritized',
    'standardise': 'standardize', 'standardised': 'standardized',
    'generalise': 'generalize', 'generalised': 'generalized',
    'specialise': 'specialize', 'specialised': 'specialized',
    'globalisation': 'globalization', 'modernisation': 'modernization',
    'offence': 'offense', 'defence': 'defense', 'practise': 'practice',
    'licence': 'license', 'catalogue': 'catalog', 'dialogue': 'dialog',
    'grey': 'gray', 'towards': 'toward', 'whilst': 'while',
    'amongst': 'among', 'learnt': 'learned', 'spelt': 'spelled',
    'burnt': 'burned', 'judgement': 'judgment', 'acknowledgement': 'acknowledgment',
}

# Words the dictionary does not carry (abbreviations, symbols).
EXTRA = {
    'sb': 'ˌɛsˈbi', 'sth': 'ˌɛsˌtiˈeɪʧ',
    'er': 'ɚ', 'uh': 'ʌ', 'mm': 'm',
    '...': '…',
}

# Entries where the dictionary's reduced vowel is not the one dictionaries
# print ("analysis" is əˈnæləsɪs, not əˈnælɪsɪs).
PRON_OVERRIDE = {
    'analysis': 'AH0 N AE1 L AH0 S IH0 S',
    'analyses': 'AH0 N AE1 L AH0 S IY2 Z',
    'analysed': 'AE1 N AH0 L AY2 Z D',
    'analyzed': 'AE1 N AH0 L AY2 Z D',
    # The dictionary reduces the first vowel of "ad-/ac-" but writes a full
    # /æ/ for "trans-", "activity" and "contrast". Fix the reduced group here.
    'accept': 'AH0 K S EH1 P T',
    'acceptable': 'AH0 K S EH1 P T AH0 B AH0 L',
    'acceptance': 'AH0 K S EH1 P T AH0 N S',
    'accepted': 'AH0 K S EH1 P T IH0 D',
    'accessible': 'AH0 K S EH1 S AH0 B AH0 L',
    'administration': 'AH0 D M IH2 N IH0 S T R EY1 SH AH0 N',
    'advantage': 'AH0 D V AE1 N T IH0 JH',
    'adverse': 'AH0 D V ER1 S',
    'adversely': 'AH0 D V ER1 S L IY0',
    'overall': 'OW2 V ER0 AO1 L',
}

NUMBERS = {
    '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
    '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine',
    '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen',
    '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen',
    '18': 'eighteen', '19': 'nineteen', '20': 'twenty',
}

VOWEL_LETTERS = set('ɑæʌɔaeɛɝɪieoʊuʊəɚ')

# --------------------------------------------------------------------------
# Heteronyms: the same spelling, different stress
#
# CMU lists one pronunciation first, and it is not always the one these
# academic noun phrases need ("conduct research" is a verb, "accurate record"
# is a noun). The position of the word decides which reading to use.
# --------------------------------------------------------------------------

HETERONYMS = {
    'abstract': {'noun': 'AE1 B S T R AE2 K T', 'verb': 'AE0 B S T R AE1 K T'},
    'address': {'noun': 'AE1 D R EH2 S', 'verb': 'AH0 D R EH1 S'},
    'conduct': {'noun': 'K AA1 N D AH0 K T', 'verb': 'K AH0 N D AH1 K T'},
    'conflict': {'noun': 'K AA1 N F L IH0 K T', 'verb': 'K AH0 N F L IH1 K T'},
    'contrast': {'noun': 'K AA1 N T R AE0 S T', 'verb': 'K AH0 N T R AE1 S T'},
    'export': {'noun': 'EH1 K S P AO2 R T', 'verb': 'EH2 K S P AO1 R T'},
    'extract': {'noun': 'EH1 K S T R AE0 K T', 'verb': 'IH0 K S T R AE1 K T'},
    'impact': {'noun': 'IH1 M P AE0 K T', 'verb': 'IH2 M P AE1 K T'},
    'import': {'noun': 'IH1 M P AO2 R T', 'verb': 'IH2 M P AO1 R T'},
    'increase': {'noun': 'IH1 N K R IY2 S', 'verb': 'IH2 N K R IY1 S'},
    'object': {'noun': 'AA1 B JH EH0 K T', 'verb': 'AH0 B JH EH1 K T'},
    'permit': {'noun': 'P ER1 M IH2 T', 'verb': 'P ER0 M IH1 T'},
    'present': {'noun': 'P R EH1 Z AH0 N T', 'verb': 'P R IY0 Z EH1 N T'},
    'produce': {'noun': 'P R OW1 D UW0 S', 'verb': 'P R AH0 D UW1 S'},
    'progress': {'noun': 'P R AA1 G R EH2 S', 'verb': 'P R AH0 G R EH1 S'},
    'project': {'noun': 'P R AA1 JH EH0 K T', 'verb': 'P R AA0 JH EH1 K T'},
    'record': {'noun': 'R EH1 K ER0 D', 'verb': 'R IH0 K AO1 R D'},
    'research': {'noun': 'R IY1 S ER0 CH', 'verb': 'R IY0 S ER1 CH'},
    'separate': {'noun': 'S EH1 P ER0 IH0 T', 'verb': 'S EH1 P ER0 EY2 T'},
    'subject': {'noun': 'S AH1 B JH IH0 K T', 'verb': 'S AH0 B JH EH1 K T'},
    'survey': {'noun': 'S ER1 V EY2', 'verb': 'S ER0 V EY1'},
    'transfer': {'noun': 'T R AE1 N S F ER0', 'verb': 'T R AE0 N S F ER1'},
    'use': {'noun': 'Y UW1 S', 'verb': 'Y UW1 Z'},
}

# These are nouns or adjectives wherever the lists use them.
ALWAYS_NOUN = {'abstract', 'impact', 'research', 'separate', 'subject', 'survey'}

DETERMINERS = {
    'a', 'an', 'the', 'this', 'that', 'these', 'those', 'its', 'their', 'our',
    'your', 'his', 'her', 'my', 'some', 'any', 'each', 'every', 'no',
    'another', 'one', 'such',
}

# A word that can only be followed by a verb, or an adverb that only modifies
# one ("greatly increase", "use effectively").
VERB_TRIGGERS = {
    'to', 'can', 'could', 'will', 'would', 'shall', 'should', 'may', 'might',
    'must', 'do', 'does', 'did', 'not', "don't", "doesn't", "didn't",
    'please', 'help', 'helps', 'helping',
    'greatly', 'significantly', 'dramatically', 'steadily', 'effectively',
    'sparingly', 'widely', 'commonly', 'frequently', 'extensively',
    'positively', 'strongly', 'closely', 'increasingly', 'clearly',
    'particularly', 'extremely', 'equally', 'easily', 'directly',
}

# A few phrases where the default guess is wrong.
PHRASE_POS = {
    'present context': 'noun',
}


# --------------------------------------------------------------------------
# CMU dictionary
# --------------------------------------------------------------------------

def load_cmu():
    text = None
    if os.path.exists(CACHE):
        with open(CACHE, encoding='latin-1') as f:
            text = f.read()
    else:
        print('downloading CMU dictionary...')
        with urllib.request.urlopen(CMU_URL) as response:
            text = response.read().decode('latin-1')
        os.makedirs(os.path.dirname(CACHE), exist_ok=True)
        with open(CACHE, 'w', encoding='latin-1') as f:
            f.write(text)

    words = {}
    for line in text.splitlines():
        if line.startswith(';;;') or '  ' not in line:
            continue
        word, phones = line.split('  ', 1)
        word = word.strip().lower()
        # Skip alternate pronunciations: "word(2)" — keep the first listed one.
        if re.search(r'\(\d+\)$', word):
            continue
        words[word] = phones.split()
    return words


def parse_phones(phones):
    out = []
    for p in phones:
        m = re.match(r'([A-Z]+)([0-2])?$', p)
        if not m:
            continue
        out.append((m.group(1), m.group(2)))
    return out


# --------------------------------------------------------------------------
# Syllables and stress
# --------------------------------------------------------------------------

def syllabify(phones):
    nuclei = [i for i, (base, _) in enumerate(phones) if base in VOWELS]
    if not nuclei:
        return [phones]

    starts = [0]
    for a, b in zip(nuclei, nuclei[1:]):
        cluster = phones[a + 1:b]
        onset = 0
        for n in (3, 2, 1):
            if len(cluster) >= n and is_onset([base for base, _ in cluster[-n:]]):
                onset = n
                break
        starts.append(b - onset)
    starts.append(len(phones))
    return [phones[starts[i]:starts[i + 1]] for i in range(len(starts) - 1)]


def render(phones):
    """ARPAbet phones -> IPA with stress marks at syllable onsets."""
    syllables = syllabify(phones)
    multi = len(syllables) > 1
    last = len(syllables) - 1
    stresses = []
    for syllable in syllables:
        found = None
        for base, digit in syllable:
            if base in VOWELS and digit in ('1', '2'):
                found = digit
                break
        stresses.append(found)
    out = []
    pos = 0
    seen_primary = False
    for index, syllable in enumerate(syllables):
        stress = stresses[index]
        vowel = None
        for base, digit in syllable:
            if base in VOWELS and digit in ('1', '2'):
                vowel = base
                break
        # One primary stress per word: "widespread" is ˈwaɪdsprɛd.
        if stress == '1':
            if seen_primary:
                stress = '2'
            else:
                seen_primary = True
        # CMU marks the final -y of "-ity" as secondary (əˈbɪləˌti); learner
        # dictionaries write it plain (əˈbɪləti).
        if index == last and vowel == 'IY' and stress == '2':
            stress = None
        # A two-syllable word carries one stress mark (ɪnˈkris, ˈɪnkris).
        if len(syllables) == 2 and stress == '2':
            stress = None
        # A secondary right before the primary is not written (ɪmˈpɔrtəns).
        if stress == '2' and index + 1 < len(syllables) and stresses[index + 1] == '1':
            stress = None
        if multi and stress == '1':
            out.append('ˈ')
        elif multi and stress == '2':
            out.append('ˌ')
        for offset, (base, digit) in enumerate(syllable):
            at = pos + offset
            following = phones[at + 1][0] if at + 1 < len(phones) else None
            if digit == '0' and base == 'AH':
                out.append('ə')
            elif digit == '0' and base == 'ER':
                out.append('ɚ')
            elif (digit == '0' and base == 'IY' and index == 0
                  and following is not None and following not in VOWELS):
                # Reduced prefix: begin, present, return -> bɪˈɡɪn, prɪˈzɛnt.
                out.append('ɪ')
            else:
                out.append(IPA[base])
        pos += len(syllable)
    return ''.join(out)


# --------------------------------------------------------------------------
# Inflection fallbacks for words missing from the dictionary
# --------------------------------------------------------------------------

SIBILANT = {'S', 'Z', 'SH', 'ZH', 'CH', 'JH'}
VOICELESS = {'P', 'T', 'K', 'F', 'TH'}


def add_suffix(phones, kind):
    last = phones[-1][0]
    if kind in ('plural', 'poss'):
        if last in SIBILANT:
            return phones + [('IH', '0'), ('Z', None)]
        if last in VOICELESS:
            return phones + [('S', None)]
        return phones + [('Z', None)]
    if kind == 'past':
        if last in ('T', 'D'):
            return phones + [('IH', '0'), ('D', None)]
        if last in VOICELESS or last in SIBILANT:
            return phones + [('T', None)]
        return phones + [('D', None)]
    if kind == 'ing':
        return phones + [('IH', '0'), ('NG', None)]
    raise ValueError(kind)


def candidates(word):
    """Possible dictionary headwords for an inflected form."""
    out = [word]
    if word in BRITISH:
        out.insert(0, BRITISH[word])
    if word in NUMBERS:
        out.insert(0, NUMBERS[word])
    if "'" in word:
        out.append(word.replace("'", ''))
    if word.endswith("'s") and len(word) > 3:
        out.append((word[:-2], 'poss'))
    if word.endswith("s'") and len(word) > 3:
        out.append((word[:-2], 'poss'))
    if word.endswith('ies') and len(word) > 4:
        out.append((word[:-3] + 'y', 'plural'))
    if word.endswith('es') and len(word) > 3:
        out.append((word[:-2], 'plural'))
    if word.endswith('s') and not word.endswith('ss') and len(word) > 2:
        out.append((word[:-1], 'plural'))
    if word.endswith('ied') and len(word) > 4:
        out.append((word[:-3] + 'y', 'past'))
    if word.endswith('ed') and len(word) > 3:
        out.append((word[:-2], 'past'))
        out.append((word[:-1], 'past'))
    if word.endswith('ing') and len(word) > 4:
        out.append((word[:-3], 'ing'))
        out.append((word[:-3] + 'e', 'ing'))
        if len(word) > 5 and word[-4] == word[-5]:
            out.append((word[:-4], 'ing'))
    return out


def fix_suffix(head, phones):
    """-ed and -es are /ɪd/ and /ɪz/ after t/d/s/z, but CMU often writes AH0."""
    if head.endswith('ed') and len(phones) >= 2:
        if phones[-2] == ('AH', '0') and phones[-1][0] == 'D':
            return phones[:-2] + [('IH', '0'), phones[-1]]
    if head.endswith('es') and len(phones) >= 2:
        if phones[-2] == ('AH', '0') and phones[-1][0] == 'Z':
            return phones[:-2] + [('IH', '0'), phones[-1]]
    return phones


def lookup(word, cmu, pos=None, allow_weak=True):
    """IPA for one word, or None."""
    w = word.lower().replace('’', "'")
    if w in EXTRA:
        return EXTRA[w]
    if allow_weak and w in WEAK:
        return WEAK[w]
    w = w.strip('.,;:!?"“”')
    if not w:
        return None
    if pos and w in HETERONYMS:
        return render(parse_phones(HETERONYMS[w][pos].split()))
    if w in PRON_OVERRIDE:
        return render(parse_phones(PRON_OVERRIDE[w].split()))
    for cand in candidates(w):
        if isinstance(cand, tuple):
            head, kind = cand
        else:
            head, kind = cand, None
        if head in cmu:
            phones = parse_phones(cmu[head])
            if kind:
                phones = add_suffix(phones, kind)
            return render(fix_suffix(head, phones))
    return None


# --------------------------------------------------------------------------
# Phrases
# --------------------------------------------------------------------------

def parse_token(token):
    """Split "(a)", "geographic(al)", "(be)" into (text, optional) pieces."""
    out = []
    depth = 0
    buf = ''
    for ch in token:
        if ch == '(':
            if buf:
                out.append((buf, depth > 0))
                buf = ''
            depth += 1
        elif ch == ')':
            if buf:
                out.append((buf, depth > 0))
                buf = ''
            depth = max(0, depth - 1)
        else:
            buf += ch
    if buf:
        out.append((buf, depth > 0))
    return out


def plain(token):
    return ''.join(text for text, _ in parse_token(token)).lower()


def neighbour(texts, index, step):
    i = index + step
    while 0 <= i < len(texts):
        if texts[i]:
            return texts[i]
        i += step
    return ''


def pos_for(word, index, texts, term):
    """Noun or verb reading of a heteronym, guessed from its position."""
    w = word.lower()
    if w not in HETERONYMS:
        return None
    if term.lower() in PHRASE_POS:
        return PHRASE_POS[term.lower()]
    if w in ALWAYS_NOUN:
        return 'noun'
    prev = neighbour(texts, index, -1)
    nxt = neighbour(texts, index, 1)
    if prev in VERB_TRIGGERS:
        return 'verb'
    if nxt.endswith('ly'):
        return 'verb'
    if prev in DETERMINERS:
        return 'noun'
    if index == 0:
        return 'verb'
    return 'noun'


def split_ipa(full_ipa, base_ipa):
    """Split full_ipa where base_ipa ends, ignoring stress marks."""
    target = base_ipa.replace('ˈ', '').replace('ˌ', '')
    i = 0
    seen = ''
    while i < len(full_ipa) and seen != target:
        if full_ipa[i] not in 'ˈˌ':
            seen += full_ipa[i]
        i += 1
    if seen == target:
        return full_ipa[:i], full_ipa[i:]
    return None


SUFFIX_ALTERNATIVES = {'er', 'est', 'ly', 'al', 'ally', 'ness', 'ment', 'ed', 'ing', 's'}


def transcribe_word(token, cmu, not_found, pos=None, allow_weak=True):
    if '-' in token and not token.startswith('-'):
        parts = token.split('-')
        rendered = [lookup(p, cmu, pos) for p in parts]
        if all(rendered):
            return '-'.join(rendered)
    if '/' in token:
        parts = token.split('/')
        if len(parts) == 2 and parts[1].lower() in SUFFIX_ALTERNATIVES:
            base_ipa = lookup(parts[0], cmu, pos)
            full_ipa = lookup(parts[0] + parts[1], cmu, pos)
            if base_ipa and full_ipa:
                cut = split_ipa(full_ipa, base_ipa)
                if cut:
                    return f'{cut[0]}({cut[1]})'
        rendered = [lookup(p, cmu, pos) for p in parts]
        if all(rendered):
            return '/'.join(rendered)
    ipa = lookup(token, cmu, pos, allow_weak)
    if ipa is None:
        not_found.add(token)
        return '?' + token
    return ipa


def starts_with_vowel(term, index, cmu):
    """Does the next real word start with a vowel sound? (for the/to)"""
    for unit in term_units(term)[index + 1:]:
        pieces = parse_token(unit)
        if not pieces:
            continue
        ipa = transcribe_word(pieces[0][0], cmu, set())
        if not ipa:
            return False
        return ipa.lstrip('ˈˌ')[0] in VOWEL_LETTERS
    return False


ALWAYS_WEAK = {'a', 'an', 'the', 'of', 'and', 'or', 'as', 'than'}


def render_word(text, term, index, texts, last, cmu, not_found):
    if ',' in text:
        return ', '.join(
            render_word(part.strip(), term, index, texts, last, cmu, not_found)
            for part in text.split(',') if part.strip()
        )
    if ' ' in text:
        return ' '.join(
            render_word(part, term, index, texts, last, cmu, not_found)
            for part in text.split()
        )
    lower = text.lower()
    if lower == 'the':
        return 'ði' if starts_with_vowel(term, index, cmu) else 'ðə'
    if lower == 'to':
        return 'tu' if starts_with_vowel(term, index, cmu) else 'tə'
    allow_weak = not (index == last and lower not in ALWAYS_WEAK)
    return transcribe_word(
        text, cmu, not_found, pos_for(text, index, texts, term), allow_weak
    )


def render_token(pieces, term, index, texts, last, cmu, not_found):
    base = ''.join(text for text, optional in pieces if not optional)
    full = ''.join(text for text, _ in pieces)
    has_inner = any(optional for _, optional in pieces)

    # "geographic(al)": transcribe the whole word, then bracket the suffix.
    if has_inner and base and full != base:
        base_ipa = render_word(base, term, index, texts, last, cmu, not_found)
        full_ipa = render_word(full, term, index, texts, last, cmu, not_found)
        cut = split_ipa(full_ipa, base_ipa) if base_ipa and full_ipa else None
        if cut:
            return f'{cut[0]}({cut[1]})'

    out = []
    for text, optional in pieces:
        if not text:
            continue
        ipa = render_word(text, term, index, texts, last, cmu, not_found)
        out.append(f'({ipa})' if optional else ipa)
    return ''.join(out)


def term_units(term):
    """Group words so brackets that span a space stay together: "(a, the)"."""
    units = []
    buf = ''
    depth = 0
    for token in term.split():
        buf = f'{buf} {token}'.strip()
        depth += token.count('(') - token.count(')')
        if depth <= 0:
            units.append(buf)
            buf = ''
            depth = 0
    if buf:
        units.append(buf)
    return units


def transcribe(term, cmu, not_found):
    units = term_units(term)
    texts = [plain(unit) for unit in units]
    last = max((i for i, t in enumerate(texts) if t), default=-1)
    out = []
    for index, unit in enumerate(units):
        rendered = render_token(
            parse_token(unit), term, index, texts, last, cmu, not_found
        )
        if rendered:
            out.append(rendered)
    return ' '.join(out)



# --------------------------------------------------------------------------
# Data files
# --------------------------------------------------------------------------

def raw_block(path):
    with open(path, encoding='utf-8') as f:
        text = f.read()
    m = re.search(r'String\.raw`(.*?)`', text, re.S)
    if not m:
        sys.exit(f'no raw block in {path}')
    return m.group(1)


def data_rows(block, min_parts):
    """Yield (deck, parts) for every data line, honouring #deck markers."""
    deck = 'ACL'
    for line in block.splitlines():
        text = line.strip()
        if text.startswith('#deck '):
            deck = text[6:].strip()
            continue
        if not text or text.startswith('#'):
            continue
        parts = [p.strip() for p in text.split('|')]
        if len(parts) < min_parts:
            continue
        yield deck, parts


def spoken(term):
    return re.sub(r'\s+', ' ', term.replace('(', '').replace(')', '')).strip()


def exact_key(term):
    return spoken(term).lower()


def match_key(term):
    return ' '.join(
        w for w in exact_key(term).split(' ') if w not in ('a', 'an', 'the', 'be')
    )


def collect_terms():
    acl = [parts[0] for _, parts in data_rows(raw_block(os.path.join(ROOT, 'src', 'data', 'acl-list.ts')), 2)]
    afl = [parts[0] for _, parts in data_rows(raw_block(os.path.join(ROOT, 'src', 'data', 'afl-list.ts')), 5)]
    notes = [(deck, parts[0]) for deck, parts in data_rows(raw_block(os.path.join(ROOT, 'src', 'data', 'notes.ts')), 4)]

    # Mirror src/data/index.ts: notes attach to list entries, and any note left
    # over becomes an "extra" card, which also needs a transcription.
    by_exact = {}
    by_loose = {}
    for i, (_, term) in enumerate(notes):
        by_exact.setdefault(exact_key(term), i)
        by_loose.setdefault(match_key(term), i)

    used = set()
    for term in acl + afl:
        i = by_exact.get(exact_key(term))
        if i is None:
            i = by_loose.get(match_key(term))
        if i is not None:
            used.add(i)

    extras = [term for i, (_, term) in enumerate(notes) if i not in used]

    terms = []
    seen = set()
    for term in acl + afl + extras:
        if term not in seen:
            seen.add(term)
            terms.append(term)
    return terms, len(acl), len(afl), len(extras)


# --------------------------------------------------------------------------
# Main
# --------------------------------------------------------------------------

def main():
    cmu = load_cmu()
    print(f'CMU dictionary: {len(cmu)} headwords')

    terms, n_acl, n_afl, n_extra = collect_terms()
    print(f'cards: {n_acl} ACL + {n_afl} AFL + {n_extra} extra = {len(terms)}')

    not_found = set()
    rows = []
    for term in terms:
        if '`' in term or '${' in term:
            sys.exit(f'term would break the template literal: {term!r}')
        rows.append((term, transcribe(term, cmu, not_found)))

    if not_found:
        print(f'\n{len(not_found)} word(s) missing from the dictionary:')
        for word in sorted(not_found):
            print('  ' + word)
        sys.exit('\nAdd them to EXTRA / BRITISH or fix the data, then rerun.')

    lines = [
        '// GENERATED by scripts/build-ipa.py — do not edit by hand.',
        '// IPA (General American) for every card phrase, from the CMU Pronouncing',
        '// Dictionary (public domain). Stress marks, schwa and weak forms applied.',
        "import { parseIpa } from './parse'",
        '',
        'const RAW = `',
    ]
    for term, ipa in rows:
        lines.append(f'{term}|{ipa}')
    lines += ['`', '', 'export const IPA = parseIpa(RAW)', '']

    with open(OUT, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

    print(f'\nwrote {len(rows)} transcriptions to src/data/ipa.ts')


if __name__ == '__main__':
    main()
