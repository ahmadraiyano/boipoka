import React from "react";

import { FaCalendarCheck, FaStar } from "react-icons/fa";
import { PiBookLight } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { Link } from "react-router";

const ReadBook = ({ book }) => {
  const { bookName,bookId, image, author, rating, category,tags, yearOfPublishing,publisher,totalPages } = book;
  return (
    
    <div className="card bg-base-100 border w-full h-full border-gray-200 p-4 mx-auto md:flex-row md:gap-8">
      <figure className="bg-base-200 p-20">
        <img
        className="h-33 md:w-28"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="w-full">
        <h2 className="card-title">
          {bookName}
        </h2>
        <p className="my-4">By: {author}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 my-4">
          <p className="flex justify-start gap-4"><span className="font-bold">Tag</span> {tags.map((tag, i) => <span key={i} className="bg-green-100 text-green-500 px-2 rounded-md">{tag}</span>)}</p>
          <p className="flex gap-2 items-center"><FaCalendarCheck /> Year of Publishing: {yearOfPublishing}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
            <p className="flex items-center gap-2"><RiGroupLine />Publisher: {publisher}</p>
            <p className="flex items-center gap-2"><PiBookLight />Pages: {totalPages}</p>
        </div>
        <div className="divider"></div>
        <div className="card-actions pt-4">
          <div className="btn btn-outline btn-info rounded-3xl">Category {category}</div>
          <div className="btn btn-outline btn-warning rounded-3xl">Rating <span className="text-amber-400"><FaStar /></span>{rating}</div>
          <Link to={`/details/${bookId}`}><button className="btn btn-success rounded-3xl">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
