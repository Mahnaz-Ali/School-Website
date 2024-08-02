// src/Students.js
import React from 'react';

const Students = () => (
  <div className="relative min-h-screen overflow-hidden bg-gray-100">
    {/* Background Video */}
    <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover opacity-50">
      <source src="/vdo/66ab7b32677cb701841118ee.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay for background video */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

    <div className="relative z-10 container mx-auto p-4 md:p-8 text-white">
      <h2 className="text-4xl font-bold mb-6 text-center">Student Life</h2>

      {/* Extracurricular Activities */}
      <section className="mb-8">
        <h3 className="text-3xl font-semibold mb-4">Extracurricular Activities</h3>
        <p className="text-lg">
          Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
        </p>
        <p className="text-lg mt-2">
          Clubs and Societies: Literary Society, Environmental Club, Astronomy Club, Coding Club
        </p>
      </section>

      {/* Achievements */}
      <section className="mb-8">
        <h3 className="text-3xl font-semibold mb-4">Achievements</h3>
        <ul className="list-disc pl-5 text-lg">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </section>

      {/* Student Council */}
      <section>
        <h3 className="text-3xl font-semibold mb-4">Student Council</h3>
        <div className="space-y-4 text-lg">
          <p><strong>President:</strong> Amy Parker, Grade 12</p>
          <p><strong>Vice President:</strong> Rajiv Mehta, Grade 11</p>
          <p><strong>Secretary:</strong> Lisa Wong, Grade 10</p>
        </div>
      </section>
    </div>
  </div>
);

export default Students;
