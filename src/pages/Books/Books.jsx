import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("booksData.json")
        .then(res=>res.json())
        .then(data=> {
            setBooks(data)
        })
    }, [])
    return (
        <div>
            {books.map(book => <h2 key={book.bookId}>{book.bookName}</h2>)}
        </div>
    );
};

export default Books;