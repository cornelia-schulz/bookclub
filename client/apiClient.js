import request from 'superagent'

export function getAllBooks() {
  return request
    .get('/api/v1/books')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}