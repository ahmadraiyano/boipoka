import React from 'react';
import banner from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse py-10">
    <img
      src={banner}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='lg:w-7/12'>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <button className="btn bg-green-500 text-white mt-4">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;