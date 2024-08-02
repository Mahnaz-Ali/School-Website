import React from 'react';

const AboutUs = () => (
  <div className="relative min-h-screen overflow-hidden">
    {/* Background Video */}
    <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
      <source src="/vdo/66ab7b32677cb701841118ee.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay for background video */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

    <div className="relative z-10 container mx-auto p-4 md:p-8 text-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">About Us</h2>
      <p className="text-sm md:text-lg mb-4 md:mb-6">
        Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
      </p>
      <p className="text-sm md:text-lg mb-4 md:mb-6">
        <span className="font-semibold">Vision:</span> To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
      </p>
      <p className="text-sm md:text-lg mb-4 md:mb-6">
        <span className="font-semibold">Mission:</span> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
      </p>
      <p className="text-sm md:text-lg mb-4 md:mb-6">
        <span className="font-semibold">Principal's Message:</span> At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
      </p>
      <p className="text-sm md:text-lg mb-4 md:mb-6">
        <span className="font-semibold">Infrastructure and Facilities:</span> State-of-the-art science and computer labs, spacious and well-equipped classrooms, library with a vast collection of books and digital resources, sports facilities including a playground, gymnasium, and swimming pool.
      </p>
    </div>
  </div>
);

export default AboutUs;
