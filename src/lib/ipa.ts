/**
 * IPA (International Phonetic Alphabet) transcriptions for English phrases.
 * This file is auto-generated from CMU Pronouncing Dictionary data.
 */

import { IPA } from '../data/ipa'

/** Get the IPA transcription for a phrase. */
export function ipaOf(term: string): string | null {
  if (IPA[term]) {
    return IPA[term]
  }
  
  const cleanTerm = term.replace(/[()]/g, '').trim()
  if (IPA[cleanTerm]) {
    return IPA[cleanTerm]
  }
  
  return null
}
