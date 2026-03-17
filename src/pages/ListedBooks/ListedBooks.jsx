import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilities/addToDB";
import ReadBook from "../ReadBook/ReadBook";
import { FaChevronDown } from "react-icons/fa";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [sort, setSort] = useState("");
  const bookData = useLoaderData();
  useEffect(() => {
    const readBooksData = getStoredBook().map((id) => parseInt(id));
    const books = bookData.filter((book) =>
      readBooksData.includes(book.bookId),
    );
    setReadBooks(books);
  }, [bookData]);
  const handleSort = (type) => {
    if (type === "Pages") {
      setSort(type);
      const sortedByPages = [...readBooks].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setReadBooks(sortedByPages);
    }
    if (type === "Ratings") {
      setSort(type);
      const sortedByPages = [...readBooks].sort((a, b) => a.rating - b.rating);
      setReadBooks(sortedByPages);
    }
  };
  return (
    <div>
      <h2 className="text-center font-bold text-2xl bg-gray-200 py-10 my-4 rounded-lg">
        Books
      </h2>
      <div className="text-center">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 btn-success">
          Sort By: {sort ? sort : ""} <FaChevronDown />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
              <a onClick={() => handleSort("Pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("Ratings")}>Ratings</a>
            </li>
        </ul>
      </div>
      </div>
      
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
