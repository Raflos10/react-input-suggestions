import * as React from 'react'

import { SearchSuggestions } from '..'

const suggestions = [
  'polite',
  'fastidious',
  'dull',
  'pudding',
  'mole',
  'angle',
  'anticipation',
  'ton',
  'tissue',
  'reform',
  'mathematics',
  'eavesdrop',
  'award',
  'glow',
  'unlikely',
  'relationship',
  'sustain',
  'crop',
  'net',
  'side',
  'grimace',
  'obscure',
  'fat',
  'shift',
  'danger',
  'dictate',
  'lineage',
  'butterfly',
  'hike',
  'outlook',
  'shelter',
  'smile',
  'dog',
  'interference',
  'remain',
  'inside',
  'reserve',
  'requirement',
  'tease',
  'poll',
  'hard',
  'glare',
  'forum',
  'mark',
  'home',
  'lack',
  'fast',
  'carpet',
  'pressure',
  'cooperate',
].map(word => (
  <section key={word}>
    <a href={`https://www.google.co.uk/search?q=${word}`}>{word}</a>
    <button>{word}</button>
  </section>
))

const App = (): JSX.Element => (
  <SearchSuggestions
    suggestions={suggestions}
    autoFocus={true}
    withTheme={true}
  />
)

export default App
