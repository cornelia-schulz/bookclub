import React from 'react'
import i18n from 'i18next'
import { withNamespaces } from 'react-i18next'
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
    let { t, i18n } = this.props
    return (
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
}
export default withNamespaces('strings')(Books)