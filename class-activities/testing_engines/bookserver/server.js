import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const dataFilePath = path.join(__dirname, 'data.json');

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE'); // Allow specific HTTP methods
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Allow specific headers
  next();
});

function readData() {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

app.get('/api/books', (req, res) => {
    const data = readData();
    const books = data.books.map(book => ({
        title: book.title,
        author: book.author, 
	price: book.price, 
        genre:book.genre
    }));
    res.json(books);
});

app.get('/api/authors', (req, res) => {
    const data = readData();
    const authors = data.books.map(book => ({
        id: book.author_id,
        author: book.author
    }));
    const uniqueAuthors = Array.from(new Set(authors.map(a => a.id)))
        .map(id => authors.find(a => a.id === id));
    res.json(uniqueAuthors);
});

app.get('/author/:id/books', (req, res) => {
    const data = readData();
    const authorId = parseInt(req.params.id, 10);
    const booksByAuthor = data.books.filter(book => book.author_id === authorId);
    res.json(booksByAuthor);
});

app.get('/categories', (req, res) => {
    const data = readData();
    const categories = data.books.map(book => ({
        id: book.genre_id,
        genre: book.genre
    }));
    const uniqueCategories = Array.from(new Set(categories.map(c => c.id)))
        .map(id => categories.find(c => c.id === id));
    res.json(uniqueCategories);
});

app.get('/category/:id/books', (req, res) => {
    const data = readData();
    const categoryId = parseInt(req.params.id, 10);
    const booksInCategory = data.books.filter(book => book.genre_id === categoryId);
    res.json(booksInCategory);
});

app.post('/books', (req, res) => {
    const newBook = req.body;
    const data = readData();
    newBook.id = data.books.length ? data.books[data.books.length - 1].id + 1 : 1;
    data.books.push(newBook);
    writeData(data);
    res.status(201).json(newBook);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export { app };
