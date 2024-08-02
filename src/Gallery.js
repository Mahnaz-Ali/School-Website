// src/Gallery.js
import React, { useState } from 'react';

const Gallery = () => {
  // State for the selected filter
  const [filter, setFilter] = useState('all');

  // Data for gallery items
  const galleryItems = [
    { type: 'photo', src: '/img/Sports-Day.jpg', alt: 'Students participating in various sports events.', caption: 'Sports Day' },
    { type: 'photo', src: '/img/Science-exhibition.jpg', alt: 'Students presenting their science projects.', caption: 'Science Exhibition' },
    { type: 'photo', src: '/img/Cultural-fest.JPG', alt: 'Students performing in the cultural fest.', caption: 'Cultural Fest' },
    { type: 'photo', src: '/img/class-room.jpg', alt: 'A glimpse of our interactive classrooms.', caption: 'Classroom' },
    { type: 'photo', src: '/img/library.jpg', alt: 'Students reading and studying in the school library.', caption: 'Library' },
    { type: 'video', src: '/vdo/66ab7b32677cb701841118ee.mp4', alt: 'Virtual tour of Springdale Public School.', caption: 'School Tour' },
    { type: 'video', src: '/vdo/Annual Report by Principal - CGR International School Annual Utsav 2017.mp4', alt: 'Highlights from the Annual Function 2023.', caption: 'Annual Function Highlights' }
  ];

  // Filtered items based on the selected filter
  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.type === filter);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover opacity-50">
        <source src="/vdo/invideo-ai-1080 Welcome to Our School! 2024-07-31 .mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for background video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 container mx-auto p-4 md:p-8 text-white">
        {/* Gallery Filters */}
        <div className="mb-6 text-center">
          <button onClick={() => setFilter('all')} className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-2 hover:bg-blue-600 transition">All</button>
          <button onClick={() => setFilter('photo')} className="bg-green-500 text-white px-4 py-2 rounded-lg mx-2 hover:bg-green-600 transition">Photos</button>
          <button onClick={() => setFilter('video')} className="bg-red-500 text-white px-4 py-2 rounded-lg mx-2 hover:bg-red-600 transition">Videos</button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div key={index} className="relative">
              {item.type === 'photo' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              ) : (
                <video controls className="w-full h-auto rounded-lg shadow-md">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center text-white rounded-b-lg">
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
