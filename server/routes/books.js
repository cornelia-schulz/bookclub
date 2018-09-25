const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAll()
    .then(books => {
      res.json(books)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to read from database.')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getOne(id)
    .then(book => {
      res.json(book)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to read from database.')
    })
})

router.post('/', (req, res) => {
  const newBook = {
    name: req.body.name,
    age: req.body.age
  }
  db.createNew(newBook)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to write to the database.')
    })
})

router.put('/', (req, res) => {
  const updatedBook = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age
  }
  db.updateOne(updatedBook)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to write to the database.')
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteOne(id)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to write to the database.')
    })
})

module.exports = router