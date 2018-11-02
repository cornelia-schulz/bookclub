import React from 'react'
import { useState, useEffect } from 'react'
import i18n from 'i18next'
import { withNamespaces } from 'react-i18next'
import { getAllBooks } from '../apiClient'

function Books(props) {
const [books, setBooks] = useState([])
let { t, i18n } = props

useEffect(() => {
  getAllBooks()
    .then(books => {
      setBooks(books)
    })
})

    return (
      <div className="Books">
        <h1>{t('appName')}</h1>
        <button onClick={() => i18n.changeLanguage('de')}>{t('languages.de')}</button>
        <button onClick={() => i18n.changeLanguage('en')}>{t('languages.en')}</button>
        <h2>{t('Books')}</h2>
        {books && <ul>
          {books.map(book => {
            return <li key={book.id}>{book.title}</li>
          })}
        </ul>}
      </div>
    )
}
export default withNamespaces('strings')(Books)