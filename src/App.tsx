import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Trans } from '@lingui/macro'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'

import { da, en } from 'make-plural/plurals'

i18n.loadLocaleData('da', { plurals: da })
i18n.loadLocaleData('en', { plurals: en })

type Local = 'da' | 'en'

/**
 * Load messages for requested locale and activate it.
 */
async function activateLocale(locale: Local) {
  const { messages } = await import(`./locales/${locale}/messages.ts`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}

activateLocale('en')

function App() {
  const [count, setCount] = useState(0)
  const [locale, setLocale] = useState<Local>('en')
  const nextLanguage = locale === 'en' ? 'da' : 'en'

  const switchLanguage = () => {
    console.log('changing language...')
    setLocale(nextLanguage)
    activateLocale(nextLanguage)
  }

  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Trans>Hello Vite + React + LinguiJS!</Trans>
          </p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              <Trans>The count is: {count}</Trans>
            </button>
          </p>
          <p>
            <button type="button" onClick={() => switchLanguage()}>
              <Trans>Change language to {nextLanguage}</Trans>
            </button>
          </p>
          <Trans>This is a translated message</Trans>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </I18nProvider>
  )
}

export default App
