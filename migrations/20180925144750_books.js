
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', table => {
      table.increments('id').primary()
      table.string('title')
      table.string('author')
      table.string('publisher')
      table.integer('year')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
