import React from 'react';

const Faculty = () => (
  <div className="relative min-h-screen bg-gray-100">
    {/* Background Video */}
    <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover opacity-30">
      <source src="/vdo/66ab7b32677cb701841118ee.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay for background video */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

    <div className="relative z-10 container mx-auto p-4 md:p-8 text-center text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Faculty</h2>
      <p className="text-lg mb-8">Meet our dedicated team of faculty members who are committed to providing an excellent educational experience.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/img/Male1.jpeg" alt="John Doe" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
          <h3 className="text-xl font-semibold mb-2">John Doe</h3>
          <p className="text-md font-medium mb-2">Principal</p>
          <p className="text-sm mb-2">M.Ed, 20 years of experience in educational administration.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/img/Female1.jpeg" alt="Jane Smith" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
          <p className="text-md font-medium mb-2">Vice Principal</p>
          <p className="text-sm mb-2">M.Sc. in Physics, 15 years of teaching experience.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/img/Female2.jpeg" alt="Emily Johnson" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
          <p className="text-md font-medium mb-2">English Teacher</p>
          <p className="text-sm mb-2">M.A. in English, 10 years of teaching experience.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/img/Male2.jpeg" alt="Michael Brown" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Michael Brown</h3>
          <p className="text-md font-medium mb-2">Mathematics Teacher</p>
          <p className="text-sm mb-2">M.Sc. in Mathematics, 8 years of teaching experience.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/img/Female3.jpeg" alt="Sophia Davis" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
          <h3 className="text-xl font-semibold mb-2">Sophia Davis</h3>
          <p className="text-md font-medium mb-2">Science Teacher</p>
          <p className="text-sm mb-2">M.Sc. in Chemistry, 12 years of teaching experience.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/img/Male3.jpeg" alt="David Wilson" className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
          <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
          <p className="text-md font-medium mb-2">Computer Science Teacher</p>
          <p className="text-sm mb-2">B.Tech in Computer Science, 5 years of teaching experience.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Faculty;
