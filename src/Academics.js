import React from 'react';

const Academics = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/vdo/66ab7b32677cb701841118ee.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for background video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 container mx-auto p-4 md:p-8 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Academics</h2>
        <div className="text-left max-w-4xl mx-auto bg-opacity-75 bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4">Curriculum</h3>
          <div className="text-sm md:text-lg mb-4">
            <h4 className="text-xl md:text-3xl font-medium mb-2">Primary (Grades 1-5)</h4>
            <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
          </div>
          <div className="text-sm md:text-lg mb-4">
            <h4 className="text-xl md:text-3xl font-medium mb-2">Secondary (Grades 6-10)</h4>
            <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
          </div>
          <div className="text-sm md:text-lg mb-4">
            <h4 className="text-xl md:text-3xl font-medium mb-2">Senior Secondary (Grades 11-12)</h4>
            <div className="ml-4">
              <h5 className="text-lg md:text-2xl font-medium mb-1">Science Stream</h5>
              <p>Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
              <h5 className="text-lg md:text-2xl font-medium mb-1 mt-2">Commerce Stream</h5>
              <p>Accountancy, Business Studies, Economics, Mathematics, English</p>
            </div>
          </div>

          <div className="text-sm md:text-lg mb-4">
            <h3 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4">Teaching Methodologies</h3>
            <p>"We use a blend of traditional and modern teaching techniques to cater to different learning styles."</p>
          </div>
          <div className="text-sm md:text-lg mb-4">
            <h3 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4">Educational Resources</h3>
            <p>"Digital classrooms, interactive learning modules, and access to online educational platforms."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
