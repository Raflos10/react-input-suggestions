import type { ReactNode } from 'react'
import { useRef, useState } from 'react'

import type { Props } from './types'

import { getElementText, wrapElementText } from './elementText'
import { Styled } from './styled'
import { useSuggestions } from './useSuggestions'

const InputSuggestions = ({
  suggestions,
  type = 'search',
  name = 'q',
  placeholder = 'Search',
  autoFocus = false,
  className = '',
  withTheme = false,
  id,
  onChange,
  highlightKeywords = false,
  maxLength = 524288
}: Props): JSX.Element => {
  const [results, setResults] = useState<ReactNode[]>(suggestions)
  const inputSearchRef = useRef<HTMLInputElement>(null)
  const searchSuggestionsRef = useRef<HTMLUListElement>(null)

  const {
    selectInitialResult,
    onResultsHover,
    onResultsKeyDown,
    showSuggestions,
    onInputFocus,
  } = useSuggestions(inputSearchRef, searchSuggestionsRef, results)

  const filterSuggestions = (e: { target: { value: string } }) =>
    setResults(
      suggestions.filter(suggestion =>
        getElementText(suggestion)
          ?.toLowerCase()
          .includes(e.target.value.toLowerCase() || '')
      )
    )

  return (
    <Styled id={id} className={className} withTheme={withTheme}>
      <input
        ref={inputSearchRef}
        type={type}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={e => {
          if (onChange) {
            onChange(e)
          }
          filterSuggestions(e)
        }}
        onKeyDown={selectInitialResult}
        onFocus={onInputFocus}
        spellCheck={false}
        autoComplete="off"
        autoCapitalize="off"
        maxLength={maxLength}
      />
      {showSuggestions && (
        <ul ref={searchSuggestionsRef}>
          {results.map(suggestion => (
            <li
              key={getElementText(suggestion)}
              onMouseOver={onResultsHover}
              onKeyDown={onResultsKeyDown}
            >
              {highlightKeywords
                ? wrapElementText(
                    suggestion,
                    inputSearchRef.current?.value || ''
                  )
                : suggestion}
            </li>
          ))}
        </ul>
      )}
    </Styled>
  )
}

export default InputSuggestions