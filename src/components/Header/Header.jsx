import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function ResponsiveHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="bg-green-500 text-white text-xl font-bold px-2 py-0 rounded-md">F</span>
          <span className="text-black text-xl font-bold ml-2">OODI</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/home"
                className="text-black text-sm font-medium hover:text-green-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="text-black text-sm font-medium hover:text-green-500 transition-colors"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-black text-sm font-medium hover:text-green-500 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className="text-black text-sm font-medium hover:text-green-500 transition-colors"
              >
                Offers
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Button + Hamburger Menu */}
        <div className="flex items-center space-x-6">
          {/* Contact Button */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Contact
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/home"
                className="text-black text-sm font-medium hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="text-black text-sm font-medium hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-black text-sm font-medium hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className="text-black text-sm font-medium hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

