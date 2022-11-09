const pool = require('../utils/pool');

class Author {
  constructor(row) {
    this.id = row.id;
    this.first_name = row.first_name;
    this.last_name = row.last_name;
    this.books = row.books;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * authors');
    return rows.map(
      (authorRow) => new Author({ id: authorRow.id, first_name: authorRow.first_name, last_name: authorRow.last_name })
    );
  }
}

module.exports = Author;
