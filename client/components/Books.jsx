import React from 'react'
import { I18n } from 'react-i18next';
import { getAllBooks } from '../apiClient'

class Books extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    getAllBooks()
      .then(books => {
        this.setState({ books })
      })
  }

  render() {
    return (
      <I18n ns="strings">
        {
          (t, { i18n }) => (
            <div className="Books">
              <h1>{t('appName')}</h1>
                <button onClick={() => i18n.changeLanguage('de')}>{t('languages.de')}</button>
                <button onClick={() => i18n.changeLanguage('en')}>{t('languages.en')}</button>
                <h2>{t('books')}</h2>
              {this.state.books && <ul>
                {this.state.books.map(book => {
                  return <li key={book.id}>{book.title}</li>
                })}
              </ul>}
            </div>
          )
        }
      </I18n>
    )
  }
}
export default Books