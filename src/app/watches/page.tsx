import React from 'react';
import Image from 'next/image';

const Watches = () => {
  const watchData = [
    { id: 1, name: 'Silver Watch', price: '70$', description: 'Amazing Watch', image: '/watch-1.jpg' },
    { id: 2, name: 'Black Watch', price: '90$', description: 'Beautiful Watch', image: '/watch-2.jpg' },
    { id: 3, name: 'Hamilton Watch', price: '100$', description: 'Luxury Watch', image: '/watch-3.jpg' },
    { id: 4, name: 'Rolex Watch', price: '200$', description: 'Luxury Watch', image: '/watch-4.jpg' },
    { id: 5, name: 'Tomi Watch', price: '150$', description: 'Luxury Watch', image: '/watch-6.jpg' },
    { id: 6, name: 'Casio Watch', price: '190$', description: 'Luxury Watch', image: '/watch-7.jpg' },
    { id: 7, name: 'Casio Watch', price: '200$', description: 'Luxury Watch', image: '/watch-8.jpg' },
    { id: 8, name: 'Timex Watch', price: '200$', description: 'Luxury Watch', image: '/watch-9.jpg' },
    { id: 9, name: 'Timex Watch', price: '200$', description: 'Luxury Watch', image: '/watch-10.jpg' },
  ];

  return (
    <div className="body">
      <div className="watches">
        {watchData.map((watch) => (
          <div key={watch.id} className="watch-card">
            {/* Updated img tag to Image component */}
            <Image
              src={watch.image}
              alt={watch.name}
              width={300} // Adjust width as needed
              height={300} // Adjust height as needed
              className="watch-image"
            />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className="price">{watch.price}</div>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;