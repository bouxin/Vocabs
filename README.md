# Vocabs

A mobile-first H5 flashcard app for the complete **Academic Collocation List (ACL)**
and **Academic Formulas List (AFL)** — Anki-style spaced repetition, example
sentences, audio pronunciation, and progress remembered on the device.

TypeScript + React + Vite. No backend, no account, no network calls at runtime.

## What it does

- **3,225 cards — the complete published lists.** The full Academic Collocation
  List (2,467 collocations, filed under their headwords) and the full Academic
  Formulas List (207 core + 200 written + 200 spoken, with their corpus
  frequencies), plus 151 extra academic phrases written for this app that the
  published lists do not contain.
- **Spaced repetition** — SM-2 with Anki-style learning steps (1 min / 10 min, then
  daily intervals scaled by an ease factor). Grade each card Again / Hard / Good / Easy;
  the button shows the interval it will give you.
- **Every card is written.** All 3,225 cards carry a meaning, a pattern or function
  label, and two example sentences, with the phrase highlighted even when inflected
  ("give rise to" → "gave rise to"). Cards still show a **gap-fill** prompt where one
  suits — `______ ability` → *cognitive* — and the reveal gives the full phrase, its
  audio and its list data.
- **Audio** — Web Speech API pronunciation of the phrase and of each example sentence.
  Voice and speed are selectable; it works offline once the device voice is installed.
- **IPA** — every card shows a General American transcription under the headword, with
  stress marks, schwa and weak forms: `/ˈkɑɡnɪtɪv əˈbɪləti/`. Generated from the CMU
  Pronouncing Dictionary by `scripts/build-ipa.py`.
- **Progress** — remembered / mature / learning / not-started counts, per-deck progress,
  daily streak, 14-day activity, recall accuracy. Stored in `localStorage`, with JSON
  backup and restore in Settings.
- **Browse** — search every card by phrase, meaning, headword or example; filter by
  deck, by AFL sublist, by learning state, or down to the cards that have examples;
  tap any card for its detail and review history.
- **Sublists** — the three AFL sublists switch on and off separately, so you can drop
  the spoken list ("um let me", "on the board") if you only write.
- **Installable** — manifest + service worker, so it can be added to the home screen
  and opened offline.

## Running it

```bash
npm install
npm run dev          # http://localhost:5177
```

## Building

| Command | Output | Use it for |
| --- | --- | --- |
| `npm run build` | `dist/` | Normal static hosting (GitHub Pages, nginx, OSS, Vercel…). Includes the PWA manifest and service worker. |
| `npm run build:single` | `dist-single/index.html` | One self-contained HTML file (~345 KB). Drop it anywhere, open it from disk, or put it in a WeChat/H5 container. |
| `npm run build:artifact` | `dist-artifact/index.html` | The same bundle reshaped as a Claude Artifact page. |

All builds use relative asset paths (`base: './'`), so they work from a subdirectory.

## Deploying

The output is plain static files with relative asset paths, so it needs no server
configuration and no `base` setting for either host.

### GitHub Pages

[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) builds and
deploys on every push to `main`. Push the repo, then set **Settings → Pages → Source**
to **GitHub Actions** once; after that it is automatic.

```bash
git init -b main && git add -A && git commit -m "Vocabs: ACL and AFL trainer"
```

```bash
git remote add origin git@github.com:<you>/Vocabs.git && git push -u origin main
```

A project site is served from `https://<you>.github.io/Vocabs/`. The subpath needs no
configuration here — `base: './'` keeps every asset, the manifest and the service
worker relative, and `public/.nojekyll` stops Pages filtering the build through Jekyll.

### Cloudflare Pages

Connect the repository and set:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20 or later |

Or deploy the folder directly, without a repository:

```bash
npm run build && npx wrangler pages deploy dist
```

[`public/_headers`](public/_headers) sets the caching rules Cloudflare reads at deploy
time: hashed bundles under `/assets/` are immutable for a year, while `index.html`,
`sw.js` and the manifest are always revalidated. GitHub Pages ignores that file, which
is harmless — it sets short cache lifetimes on HTML itself.

### Why the service worker matters here

`public/sw.js` is **network-first for the page and cache-first for hashed assets**. The
split is deliberate: a cache-first HTML would pin every installed copy to the version it
first saw, so a redeploy would never reach anyone who had already added the app to their
home screen. Assets are content-hashed by Vite, so cache-first is safe for those.

Service workers need HTTPS (or localhost). Both hosts provide it. Registration is wrapped
in a `catch`, so where a browser or embedded viewer refuses to register one, the app still
works — it just loses offline support.

## Adding your own cards

Three data files, all plain pipe-separated text:

| File | Holds | Format |
| --- | --- | --- |
| [`src/data/acl-list.ts`](src/data/acl-list.ts) | the published ACL | `collocation \| headwords` |
| [`src/data/afl-list.ts`](src/data/afl-list.ts) | the published AFL | `formula \| sublist \| speech/M \| writing/M \| FTW` |
| [`src/data/notes.ts`](src/data/notes.ts) | meanings and examples | `term \| pattern \| meaning \| example \| example` |

To give a card a meaning and examples, add a line to `notes.ts` under the right
`#deck` marker. It attaches to the list entry by phrase, ignoring articles and the
optional parts the lists write in brackets — so `raise a question` in `notes.ts`
matches `raise (a) question` in the ACL. A note whose phrase is in no published list
becomes a card of its own, marked **extra**.

Card ids are slugs of the phrase (`acl-cognitive-ability`), not positions, so
reordering or regenerating a list never moves your progress onto another card.

The published source page has a couple of defects the importer corrects: commas
inside brackets are no longer treated as separators (`closely allied (to, with)`
was being split in two), and four typos (`alternative interpretion`,
`use (the) concept concept`, `use (the) data data`, `make(a) judgement`) are fixed
through a small `SOURCE_FIXES` map.

The two list files are generated:

```bash
python3 scripts/import-lists.py acl.html afl.html
```

## Layout

```
src/
  data/        acl-list.ts      the published ACL (generated)
               afl-list.ts      the published AFL (generated)
               notes.ts         hand-written meanings and examples
               parse.ts         text -> entries
               index.ts         merges lists with notes into cards
  lib/         phrase.ts        bracket/article handling, ids, gap-fills
               srs.ts           SM-2 scheduling
               session.ts       builds the daily queue
               stats.ts         totals, streak, activity
               storage.ts       localStorage load/save/export/import
               speech.ts        Web Speech pronunciation
               store.ts         React state + persistence
               highlight.ts     inflection-tolerant phrase highlighting
  components/  HomeView, StudyView, BrowseView, StatsView, SettingsView,
               CardSheet, CardMeta, Speaker
scripts/     import-lists.py   regenerates the two list files
```

## Notes

- **Sources.** The Academic Collocation List is Ackermann & Chen's list, published by
  Pearson; the Academic Formulas List is Simpson-Vlach & Ellis (2010). Both were read
  from the [EAP Foundation](https://www.eapfoundation.com/vocab/academic/acl/) pages,
  which publish them in full. The meanings and example sentences in `notes.ts` are
  written for this app.
- **Coverage is complete**: 3,225 of 3,225 cards. The AFL's overlapping n-grams
  ("part of the", "of the fact", "is for the") are glossed as **fragments** — the
  note describes what the chunk frames rather than pretending it has a meaning of
  its own. The spoken sublist is glossed in its own register, as lecture frames,
  checks and fillers ("does that make sense", "on the board", "um let me"), with
  examples in seminar speech rather than written prose.
- iOS Safari requires a tap before the first speech plays, so auto-play starts working
  from the first card you interact with.
- Progress lives in the browser's storage for that origin. Clearing site data or
  switching devices loses it — use **Settings → Copy backup JSON** first.
