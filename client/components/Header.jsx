import React from 'react'
import { I18n } from 'react-i18next'

const Header = () => {
    return (
        <I18n ns="strings">
        {
            (t, { i18n }) => (
                <header className="header">
                    Header
                    <button>{t('home')}</button>
                    <button>{t('books')}</button>
                    <button>{t('language')}</button>
                </header>
            )
        }
        </I18n>
    )
}

export default Header