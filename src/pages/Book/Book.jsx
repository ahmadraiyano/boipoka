// import React, { use } from "react";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookName,bookId, image, author, rating, category,tags, yearOfPublishing } = book;
  return (
    <Link to={`/details/${bookId}`}>
    <div className="card bg-base-100 border w-full h-full border-gray-200 p-4 mx-auto">
      <figure className="bg-base-200 py-6">
        <img
        className="h-33.25"
          src={image}
          alt={bookName}
        />
      </figure>
      <div>
        <div className="flex justify-start gap-4 my-4">
          {tags.map((tag, i) => <p key={i} className="bg-green-100 text-green-500 px-2 rounded-md">{tag}</p>)}
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-info">{yearOfPublishing}</div>
        </h2>
        <p className="my-4">By: {author}</p>
        <div className="card-actions justify-between border-t border-dashed border-gray-200 pt-4">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline"><span className="text-amber-400"><FaStar /></span>{rating}</div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
