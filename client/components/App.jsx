import React from 'react'
import { withNamespaces } from 'react-i18next'
import Header from './Header'
import Footer from './Footer'
import Books from './Books'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Books></Books>
        <Footer />
      </div>
    )
  }
}
export default withNamespaces('strings')(App)