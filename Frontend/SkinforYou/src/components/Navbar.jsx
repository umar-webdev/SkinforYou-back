import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
      event.preventDefault();
      if (searchQuery.trim()) {
        // Implement your search logic here or navigate to the search results page
        console.log("Searching for:", searchQuery);
      }
    };
  return (
    <>
  <nav className="fixed top-0 left-0 w-full z-20 bg-white shadow-md">
      <div className="flex justify-between items-center p-4">
        
        {/* Hamburger Icon (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
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
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Logo (on the right, visible on small screens) */}
        <div className="text-xl font-bold text-gray-800">
          <img
            height={50}
            width={180}
            src="https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/logo.png"
            alt="Skin & You"
          />
        </div>

        {/* Search Bar (hidden on small screens) */}
        <form className="relative hidden md:flex" onSubmit={handleSearch}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-lg py-1 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-yellow-500 focus:outline-none"
            >
              🔍
            </button>
          </form>


        {/* Navigation Links (hidden on small screens) */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-yellow-500">Home</li>
          <li className="hover:text-yellow-500">Treatments</li>
          <li className="hover:text-yellow-500">Skin & FAQ</li>
          <li className="hover:text-yellow-500">Medical Clinic</li>
          <li className="hover:text-yellow-500">Photo Gallery</li>
          <li className="hover:text-yellow-500">Media</li>
          <li className="hover:text-yellow-500">About Us</li>
          <li className="hover:text-yellow-500">Contact</li>
        </ul>
      </div>

      {/* Off-canvas Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-800 focus:outline-none"
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

        {/* Logo and Search Bar inside Hamburger Menu */}
        <div className="p-6">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800 mb-6">
            <img
              height={50}
              width={180}
              src="https://www.skinandyou.in/wp-content/themes/skinandyou%203.0/images/logo.png"
              alt="Skin & You"
            />
          </div>

          {/* Search Bar */}
          <form className="relative mb-6" onSubmit={handleSearch}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-lg py-1 px-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-yellow-500 focus:outline-none"
            >
              🔍
            </button>
          </form>

          {/* Navigation Links */}
          <ul className="space-y-4">
            <li className="hover:text-yellow-500">Home</li>
            <li className="hover:text-yellow-500">Treatments</li>
            <li className="hover:text-yellow-500">Skin & FAQ</li>
            <li className="hover:text-yellow-500">Medical Clinic</li>
            <li className="hover:text-yellow-500">Photo Gallery</li>
            <li className="hover:text-yellow-500">Media</li>
            <li className="hover:text-yellow-500">About Us</li>
            <li className="hover:text-yellow-500">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar