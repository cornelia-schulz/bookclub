
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'books.mobydick', author: 'Herman Melville', publisher: 'Richard Bentley', year: 1851},
        {id: 2, title: 'books.donquixote', author: 'Miguel de Cervantes', publisher: 'Francisco de Robles', year: 1605},
        {id: 3, title: 'books.warandpeace', author: 'Leo Tolstoy', publisher: 'The Russian Messenger ', year: 1865 }
      ]);
    });
};
