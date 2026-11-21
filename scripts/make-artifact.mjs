// Turns the single-file build into a Claude Artifact page.
// Artifacts wrap the published file in their own <!doctype html>/<head>/<body>,
// so the page has to be a fragment: title + styles + markup + script, no
// document tags, and no links to files that are not published beside it.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'

const src = readFileSync('dist-single/index.html', 'utf8')

const pick = (re) => {
  const m = src.match(re)
  return m ? m[0] : ''
}

const title = pick(/<title>[\s\S]*?<\/title>/i)
const styles = [...src.matchAll(/<style[\s\S]*?<\/style>/gi)].map((m) => m[0]).join('\n')
const scripts = [...src.matchAll(/<script[\s\S]*?<\/script>/gi)].map((m) => m[0]).join('\n')
const body = src.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? ''
const markup = body.replace(/<script[\s\S]*?<\/script>/gi, '').trim()

if (!title || !styles || !scripts || !markup) {
  throw new Error('Unexpected single-file build shape — check dist-single/index.html')
}

mkdirSync('dist-artifact', { recursive: true })
writeFileSync('dist-artifact/index.html', `${title}\n${styles}\n${markup}\n${scripts}\n`)
console.log('dist-artifact/index.html written')
