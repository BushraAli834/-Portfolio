import React from 'react';

const Navbar = () => {
  
  return (
    <nav className="navbar bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-pink-600 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a href="#home">Homepage</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="navbar-center">
          <a href="#home" className="btn btn-ghost text-2xl font-bold">Portfolio</a>
        </div>

        <div className="navbar-end hidden lg:flex">
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </div>
      </div>
    </nav>
  );
}
interface NavItemProps {
  href: string;
  children: React.ReactNode; // ReactNode allows any valid React child
}
const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="relative group btn btn-ghost mx-4 text-lg transition-all duration-300 ease-in-out hover:text-pink-800"
    >
      {children}
      <span className="absolute left-0 bottom-0 h-1 w-full bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
  );
};

export default Navbar;
