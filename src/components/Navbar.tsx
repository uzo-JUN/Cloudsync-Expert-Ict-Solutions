import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" }
];

const aboutDropdownItems = [
  { name: "About Us", path: "/aboutus" },
  { name: "Teams", path: "/teams" },
  { name: "FAQ", path: "/faq" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if a nav link is active
  const isActive = (path: string) => {
    return currentPath === path;
  };

  // Check if any dropdown item is active
  const isAboutActive = () => {
    return aboutDropdownItems.some(item => currentPath === item.path);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-20 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img 
            src="/src/assets/Cloud.png"
            alt="CloudSync" 
            className="w-10 h-10 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-16">
          {/* Home - First */}
          <Link
            to="/"
            className={`text-base font-medium transition-all duration-300 hover:-translate-y-0.5 ${
              isActive("/") 
                ? 'text-[#4B6BFB]' 
                : 'text-black hover:text-[#4B6BFB]'
            }`}
          >
            Home
          </Link>
          
          {/* About with hover dropdown - Second (after Home) */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 text-base font-medium transition-all duration-300 group-hover:-translate-y-0.5 ${
                isAboutActive() 
                  ? 'text-[#4B6BFB]' 
                  : 'text-black hover:text-[#4B6BFB]'
              }`}
            >
              About
              <ChevronDown size={18} className={`transition-transform duration-200 group-hover:rotate-180 ${
                isAboutActive() ? 'text-[#4B6BFB]' : ''
              }`} />
            </button>
            
            {/* Dropdown menu - appears on hover */}
            <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {aboutDropdownItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                    currentPath === item.path 
                      ? 'text-[#4B6BFB] bg-blue-50' 
                      : 'text-black hover:text-[#4B6BFB] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services, Blog, Contact - Third, Fourth, Fifth */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                isActive(link.path) 
                  ? 'text-[#4B6BFB]' 
                  : 'text-black hover:text-[#4B6BFB]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link to="/consult" className="hidden md:block">
          <Button className="bg-black text-white rounded-full px-8 py-6 text-base transition-all duration-500 hover:-translate-y-0.5 relative overflow-hidden group">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Consult
            </span>
            <div className="absolute inset-0 bg-[#4B6BFB] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
        </Link>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu - Organized */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 py-6 px-4 shadow-lg">
          <div className="space-y-3">
            {/* Home in mobile menu */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive("/") 
                  ? 'text-[#4B6BFB] bg-blue-50' 
                  : 'text-gray-800 hover:text-[#4B6BFB] hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            
            {/* About with expandable dropdown in mobile */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`flex items-center justify-between w-full py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                  isAboutActive() 
                    ? 'text-[#4B6BFB] bg-blue-50' 
                    : 'text-gray-800 hover:text-[#4B6BFB] hover:bg-gray-50'
                }`}
              >
                <span>About</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${
                    mobileAboutOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Mobile dropdown - expands when clicked */}
              <div className={`overflow-hidden transition-all duration-300 ${
                mobileAboutOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-6 space-y-1">
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        setOpen(false);
                        setMobileAboutOpen(false);
                      }}
                      className={`block py-3 px-4 rounded-lg text-sm transition-all duration-200 ${
                        currentPath === item.path 
                          ? 'text-[#4B6BFB] bg-blue-50 font-medium' 
                          : 'text-gray-600 hover:text-[#4B6BFB] hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services, Blog, Contact in mobile menu */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-[#4B6BFB] bg-blue-50' 
                    : 'text-gray-800 hover:text-[#4B6BFB] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Consult button in mobile menu */}
            <div className="pt-4 mt-2 border-t border-gray-200">
              <Link to="/consult" onClick={() => setOpen(false)}>
                <Button className="w-full bg-black text-white rounded-full py-6 text-base transition-all duration-500 hover:bg-[#4B6BFB]">
                  Consult
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;