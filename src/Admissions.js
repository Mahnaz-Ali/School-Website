import React from 'react';

const Admissions = () => (
  <div className="relative min-h-screen overflow-hidden bg-gray-100">
    {/* Background Video */}
    <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover opacity-30">
      <source src="/vdo/66ab7b32677cb701841118ee.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay for background video */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

    <div className="relative z-10 container mx-auto p-4 md:p-8 text-white-800 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Admissions</h2>
      <p className="text-sm md:text-lg mb-4">
        Admission forms are available for download. Submit the completed form along with required documents at the school office.
      </p>
      <p className="text-sm md:text-lg mb-4">
        <span className="font-semibold">Criteria:</span> Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
      </p>
      <div className="text-sm md:text-lg mb-6">
        <span className="font-bold">Important Dates:</span>
        <ul className="list-disc list-inside mt-2" >
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </div>
      <div className="mt-8">
        <a href="/forms/application.pdf" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          Download Admission Form
        </a>
      </div>
    </div>
  </div>
);

export default Admissions;
