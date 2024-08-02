import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/vdo/66ab7b32677cb701841118ee.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for background video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 container mx-auto p-4 md:p-8 text-center text-white">
        <header className="mb-8">
          <img src="/img/9422faf4-4370-420f-847a-2863c43b9fe5.jpeg" alt="Springdale Public School Logo" className="mx-auto mb-4 w-24 md:w-32 lg:w-40" />
          <h1 className="text-4xl font-bold">Springdale Public School</h1>
          <p className="text-lg">Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
        </header>

        <Carousel className="mb-8">
          <Carousel.Item>
            <img
              className="d-block w-full object-cover"
              src="/img/Sports-Day.jpg"
              alt="Annual Sports Day"
            />
            <Carousel.Caption className="bg-opacity-75 bg-blue-900 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-semibold">Annual Sports Day</h3>
              <p className="text-md md:text-lg">Celebrating Excellence in Sports</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full object-cover"
              src="/img/Science-exhibition.jpg"
              alt="Science Exhibition"
            />
            <Carousel.Caption className="bg-opacity-75 bg-green-900 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-semibold">Science Exhibition</h3>
              <p className="text-md md:text-lg">Showcasing Student Innovations</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-full object-cover"
              src="/img/Cultural-fest.JPG"
              alt="Cultural Fest"
            />
            <Carousel.Caption className="bg-opacity-75 bg-red-900 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-semibold">Cultural Fest</h3>
              <p className="text-md md:text-lg">Embracing Diversity and Creativity</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore Our School</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/about-us" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">About Us</a>
            <a href="/admissions" className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">Admissions</a>
            <a href="/contact-us" className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
