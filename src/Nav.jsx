import React from "react";
function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-[#032714] text-xl font-bold">Logo</div>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="text-[#032714] hover:text-gray-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#032714] hover:text-gray-600 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#032714] hover:text-gray-600 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#032714] hover:text-gray-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
