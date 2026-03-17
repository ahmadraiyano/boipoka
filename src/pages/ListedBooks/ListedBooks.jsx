import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilities/addToDB";
import ReadBook from "../ReadBook/ReadBook";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const bookData = useLoaderData();
  useEffect(() => {
    const readBooksData = getStoredBook().map((id) => parseInt(id));
    const books = bookData.filter((book) =>
      readBooksData.includes(book.bookId),
    );
    setReadBooks(books);
  }, [bookData]);
  return (
    <div>
      <h2 className="text-center font-bold text-2xl bg-gray-200 py-10 my-4 rounded-lg">
        Books
      </h2>
      <div className="my-6">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className="grid gap-6">
              {readBooks.map((b) => (
                <ReadBook key={b.bookId} book={b}></ReadBook>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
