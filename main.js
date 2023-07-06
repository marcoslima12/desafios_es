class Book {
  constructor(title, description, author) {
    this.title = title;
    this.description = description;
    this.author = author;
  }
}

class Lib {
  constructor() {
    this.books = [];
  }

  addBookToLib(bookInfo) {
    const newBook = new Book(
      bookInfo.title,
      bookInfo.description,
      bookInfo.author
    );
    this.books.push(newBook);
    return newBook;
  }
  getAllBooks() {
    return this.books;
  }
  removeBookById(id) {
    const index = this.books.findIndex((bookToFind) => bookToFind.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    } 
  }

  getBookById(id) {
    return this.books.find((bookToFind) => bookToFind.id === id);
  }

  updateBookById(id, info) {
    const book = this.getBookById(id);
    if (book) {
      if (info.title) {
        book.title = info.title;
      }
      if (info.description) {
        book.description = info.description;
      }
      if (info.author) {
        book.author = info.author;
      }
    }
    return book;
  }
}
