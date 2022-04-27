import React, { useEffect } from 'react'
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
  const { messages } = await import(`../src/locales/${locale}/messages.ts`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}

const I18nApp = ({ children }: any) => {
  useEffect(() => {
    activateLocale('da')
  }, [])

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}

export const I18nProviderDecorator = (storyFn: any) => (
  <I18nApp>{storyFn()}</I18nApp>
)
