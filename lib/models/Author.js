const pool = require('../utils/pool');

class Author {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.dob = row.dob;
    this.pob = row.pob;
    this.books = row.books;
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT authors.*,
      COALESCE(
        json_agg(to_jsonb(books))
        FILTER (WHERE books.id IS NOT NULL), '[]') as books
      FROM authors LEFT JOIN authors_books 
        ON authors.id = authors_books.author_id
      LEFT JOIN books on books.id = authors_books.book_id
      WHERE authors.id = $1
      GROUP BY authors.id`,
      [id]
    );
    const newAuthor = new Author(rows[0]);
    return newAuthor;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from authors');
    return rows.map(
      (authorRow) => new Author({ id: authorRow.id, name: authorRow.name })
    );
  }
}

module.exports = Author;
