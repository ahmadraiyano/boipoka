import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { addToBookDB } from "../../utilities/addToDB";

const Details = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const detailsData = useLoaderData();
  const detail = detailsData.find((detailData) => detailData.bookId === bookId);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = detail;

  const handleMarkAsRead = id => {
    addToBookDB(id)
  }

  return (
    <div className="flex flex-col lg:flex-row my-8">
      <div className="lg:w-6/12  flex justify-center bg-base-300 py-12 rounded-2xl">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl h-96 md:h-full lg:h-150 2xl:h-full" />
      </div>
      <div className="lg:w-6/12 p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="text-xl mt-4">By: {author}</p>
        </div>
        <div className="divider"></div>
        <div>
          <p>{category}</p>
        </div>
        <div className="divider"></div>
        <div>
          <p>{review}</p>
          <ul className="flex gap-4 mt-4">
            <span className="font-bold">Tag</span>
            {tags.map((tag, i) => (
              <li key={i} className="bg-green-100 text-green-500 px-2 rounded-md">#{tag}</li>
            ))}
          </ul>
        </div>
        <div className="divider"></div>
        <div className="flex gap-6">
          <div className=" flex flex-col gap-2">
            <p>Number of pages:</p>
            <p>Publisher:</p>
            <p>Year of publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="font-bold flex flex-col gap-2">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p className="flex gap-1 items-center"><span className="text-amber-400"><FaStar /></span>{rating}</p>
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <button onClick={()=>handleMarkAsRead(id)} className="btn btn-outline">Mark As Read</button>
          <button className="btn bg-[#50B1C9] hover:bg-gray-200">
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
