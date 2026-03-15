// import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({books}) => {
    //1st method
    // const [books, setBooks] = useState([])
    // useEffect(() => {
    //     fetch("booksData.json")
    //     .then(res=>res.json())
    //     .then(data=> {
    //         setBooks(data)
    //     })
    // }, [])

    //2nd method
    // const booksPromise = fetch("booksData.json").then(res=>res.json())
    return (
        <div>
            <h2 className='text-center text-4xl font-bold my-8'>Books</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {books.map(book=><Book key={book.bookId} book={book}></Book>)}
            </div>
        </div>
    );
};

export default Books;