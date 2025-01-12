import React from "react";
function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full py-8 z-50">
      <div className="container mx-auto px-12">
        <div className="flex items-center justify-between">
          <div>
            <img src="./logo/logo.png" alt="Biome Logo" className="h-12" />
          </div>
          <ul className="flex items-center space-x-12">
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-transparent border border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
