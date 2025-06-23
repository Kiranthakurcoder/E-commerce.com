import React, { useState } from "react";
import Navbar from "../Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dbresume-com.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "Thank you for contacting me! 🚀");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error during contact submission:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-[]">
        <div className="max-w-6xl w-full rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-12  bg-white backdrop-blur-md">
          {/* Left Side */}
          <div className="md:w-1/2">
            <h2 className="text-5xl font-extrabold text-gradient  mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Feel free to reach out anytime. I'm always excited to discuss new
              projects, creative ideas, or opportunities to be part of your
              vision.
            </p>
            <p className="text-gray-700 text-lg font-medium">
              Let’s build something amazing together! 🚀
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 w-full">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-400 focus:border-pink-400 transition-shadow shadow-sm hover:shadow-md"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-400 focus:border-pink-400 transition-shadow shadow-sm hover:shadow-md"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-400 focus:border-pink-400 transition-shadow shadow-sm hover:shadow-md"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-orange-400 via-pink-500 to-pink-600 hover:from-pink-600 hover:to-orange-400 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
