const pool = require('../utils/pool');


class Book {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    this.authors = row.authors;
  }

  static async getById(id) {
    
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from books');
    return rows.map(
      (bookRow) => 
        new Book({
          id: bookRow.id,
          title: bookRow.title,
          released: bookRow.released,
        })
    );
  }
}

module.exports = Book;
