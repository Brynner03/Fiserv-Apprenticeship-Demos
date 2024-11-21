CREATE TABLE Books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    genre TEXT,
    year INTEGER
);

INSERT INTO Books (title, author, genre, year) VALUES
    ('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 1960),
    ('1984', 'George Orwell', 'Dystopian', 1949),
    ('Pride and Prejudice', 'Jane Austen', 'Romance', 1813),
    ('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 1925),
    ('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 1937),
    ('War and Peace', 'Leo Tolstoy', 'Historical', 1869),
    ('The Catcher in the Rye', 'J.D. Salinger', 'Fiction', 1951),
    ('Brave New World', 'Aldous Huxley', 'Dystopian', 1932),
    ('Moby-Dick', 'Herman Melville', 'Adventure', 1851),
    ('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 1954);


-- Books Published After 1950: Write a query to retrieve all books published after 1950.
SELECT * FROM Books WHERE year > 1950;

-- Earliest Published Books: Write a query to find the 3 earliest published books.
SELECT * FROM Books ORDER BY year ASC LIMIT 3;

-- Query to find the 5 latest published books
SELECT * FROM Books
ORDER BY year DESC
LIMIT 5;