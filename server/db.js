const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

module.exports = {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne
}

function getAll() {
  return db('books')
  .select()
}

function getOne(id) {
  return db('books')
  .where('id', id)
  .select()
}

function createNew(newBook){
  return db('books')
  .insert(newBook)
}

function updateOne(updatedBook){
  return db('books')
  .update(updatedBook)
}

function deleteOne(id){
  return db('books')
  .where('id', id)
  .delete()
}