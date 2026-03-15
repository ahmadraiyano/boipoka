// import React, { use } from "react";

import { FaStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookName, image, author, rating, category } = book;
  return (
    <div className="card bg-base-100 border border-gray-200 p-4 mx-auto">
      <figure className="bg-base-200 py-6">
        <img
        className="h-33.25"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline"><span className="text-amber-400"><FaStar /></span>{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
