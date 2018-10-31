import React from 'react'
import i18n from 'i18next'
import { withNamespaces } from 'react-i18next'

const Header = (props) => {
    let { t, i18n } = props
    return (
        <header className="header">
            <button>{t('Header.home')}</button>
            <button>{t('Header.books')}</button>
            <button>{t('Header.language')}</button>
        </header>
    )
}

export default withNamespaces('strings')(Header)