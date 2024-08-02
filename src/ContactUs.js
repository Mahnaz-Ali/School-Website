// src/ContactUs.js
import React from 'react';

const ContactUs = () => (
  <div className="relative min-h-screen bg-gray-100 py-8">
    {/* Background Video */}
    <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover opacity-50">
      <source src="/vdo/66ab7b32677cb701841118ee.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay for background video */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

    <div className="relative z-10 container mx-auto px-4 md:px-8 py-8">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">Contact Us</h2>
      
      <div className="text-center mb-8">
        <p className="text-lg text-white mb-2">Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p className="text-lg text-white mb-2">Phone: +1 (123) 456-7890</p>
        <p className="text-lg text-white mb-6">Email: <a href="mailto:info@springdale.edu" className="underline">info@springdale.edu</a></p>
      </div>

      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Google Maps iframe */}
      <div className="mt-8 max-w-4xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509726!2d144.95592331531652!3d-37.81720997975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e5cbcd2a73a!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1649194038566!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  </div>
);

export default ContactUs;
