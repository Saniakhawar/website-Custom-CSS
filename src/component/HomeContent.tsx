import React from 'react';

const HomeContent = () => {
  return (
    <div>
      <section
        className="hero"
        style={{
          backgroundImage: "url('/studio-crevettes--pYIWklWWc0-unsplash.jpg')", // Ensure the image path is correct
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <h1 className="fade-in">Best Watches Available</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            reiciendis fugit totam nihil libero quas recusandae atque deserunt
            quod in provident facilis deleniti dignissimos voluptatibus
            debitis, odio, minus dicta qui.
          </p>
          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;