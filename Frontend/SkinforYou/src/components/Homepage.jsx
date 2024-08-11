import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from 'react-toastify';
import Slider from "react-slick";
import Navbar from "./Navbar";
const Homepage = () => {
  const sliderSettings = {
    dots: false,
    autoPlay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    date: '',
    concern: '',
  });
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://skinforyou-back.onrender.com',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      })
      const data = await response.json();
      if(response.ok){
        console.log('Successfull')
        toast.success('Appointment booked successfully!');
      }
      else{
        console.log('Failed')
        toast.error('Failed to book appointment');
        }
      toggleModal(); // Close the modal after submission
      
    } catch (error) {
      console.error(error);
      toast.error('Server error,Please try again later')
    }
  };
  return (
    <div className="font-sans antialiased bg-white">
      <Navbar />
      <div className="h-full w-full">
        <Slider {...sliderSettings}>
          {/* Slide 1 */}
          <div className="relative h-screen overflow-hidden">
            <img
              src="https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/laser-hair-reduction.jpg"
              alt="Slider 1"
              className="w-full h-full"
            />
            <div className="absolute bottom-0 flex justify-between items-center w-full p-5">
              <div className="p-5">
                <p className="text-xs font-extrabold text-black">
                  115 B Mittal Court,
                  <br /> Nariman Point, Mumbai – 21 <br />
                  +91 22 22843000/22825555
                </p>
              </div>

              <div className="p-5">
                <button className="bg-white border-yellow-500 rounded-full border text-yellow-500 py-1 px-2 hover:bg-yellow-500 hover:text-white hover:border-white transition-colors duration-300" onClick={toggleModal}>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative h-screen overflow-hidden">
            <img
              src="https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/laser-hair-reduction.jpg"
              alt="Slider 1"
              className="w-full h-full"
            />
            <div className="absolute bottom-0 flex justify-between items-center w-full p-5">
              <div className="p-5">
                <p className="text-xs font-extrabold text-black">
                  115 B Mittal Court,
                  <br /> Nariman Point, Mumbai – 21 <br />
                  +91 22 22843000/22825555
                </p>
              </div>

              <div className="p-5">
                <button className="bg-white border-yellow-500 rounded-full border text-yellow-500 py-1 px-2 hover:bg-yellow-500 hover:text-white hover:border-white transition-colors duration-300" onClick={toggleModal}>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative h-screen overflow-hidden">
            <img
              src="https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/laser-hair-reduction.jpg"
              alt="Slider 1"
              className="w-full h-full"
            />
            <div className="absolute bottom-0 flex justify-between items-center w-full p-5">
              <div className="p-5">
                <p className="text-xs font-extrabold text-black">
                  115 B Mittal Court,
                  <br /> Nariman Point, Mumbai – 21 <br />
                  +91 22 22843000/22825555
                </p>
              </div>

              <div className="p-5">
                <button className="bg-white border-yellow-500 rounded-full border text-yellow-500 py-1 px-2 hover:bg-yellow-500 hover:text-white hover:border-white transition-colors duration-300" onClick={toggleModal}>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 max-w-lg p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={toggleModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Book an Appointment
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                placeholder="Phone Number"
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="concern"
                  placeholder="Your Concern"
                  value={formData.concern}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Custom Next Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-4 z-10`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

// Custom Previous Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-4 z-10`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
export default Homepage;
