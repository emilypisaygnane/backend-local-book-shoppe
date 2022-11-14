const pool = require('../utils/pool');


class Book {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    this.authors = row.authors;
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT books.*,
          COALESCE(json_agg(to_jsonb(authors))
            FILTER (WHERE authors.id IS NOT NULL), '[]') as authors
          FROM books
          LEFT JOIN authors_books
            ON books.id = authors_books.book_id
          LEFT JOIN authors 
            ON authors_books.author_id = authors.id
          WHERE books.id = $1
          GROUP BY books.id
        `,
      [id]
    );
    return new Book(rows[0]);
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
