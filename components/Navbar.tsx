
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  quoteCount: number;
  openRFQ: () => void;
  openAdmin: () => void;
  logo?: string;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, quoteCount, openRFQ, openAdmin, logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: lang === Language.EN ? 'Home' : 'ዋና ገጽ', path: '/' },
    { name: lang === Language.EN ? 'Imports' : 'ኢምፖርት', path: '/imports' },
    { name: lang === Language.EN ? 'Exports' : 'ኤክስፖርት', path: '/exports' },
    { name: lang === Language.EN ? 'Medical' : 'ሕክምና', path: '/medical' },
    { name: lang === Language.EN ? 'Edibles' : 'የምግብ ምርቶች', path: '/edibles' },
    { name: lang === Language.EN ? 'Contracting' : 'ኮንትራክቲንግ', path: '/contracting' },
    { name: lang === Language.EN ? 'About' : 'ስለ እኛ', path: '/about' },
    { name: lang === Language.EN ? 'Contact' : 'አድራሻ', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              {logo ? (
                <img src={logo} alt="Ethio Trade Logo" className="h-12 w-auto object-contain" />
              ) : (
                <div className="flex flex-col group">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-blue rounded flex items-center justify-center text-white font-bold text-sm shrink-0">E</div>
                    <span className="text-primary-blue font-black text-xl tracking-tighter leading-none group-hover:text-primary-blue-hover transition-colors">
                      ETHIO TRADE VENTURE
                    </span>
                  </div>
                  <span className="text-slate-500 font-bold text-[10px] tracking-[0.2em] uppercase ml-10 -mt-1">
                    PLC • Your Global Gateway
                  </span>
                </div>
              )}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] lg:text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === link.path ? 'text-primary-blue border-b-2 border-primary-blue' : 'text-slate-600 hover:text-primary-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => setLang(lang === Language.EN ? Language.AM : Language.EN)}
              className="px-2 py-1 border border-slate-300 rounded text-[10px] font-bold hover:bg-slate-100"
            >
              {lang === Language.EN ? 'AM' : 'EN'}
            </button>

            <div className="flex items-center gap-2 border-l pl-4">
              <button
                onClick={openRFQ}
                className="relative p-2 text-slate-600 hover:text-primary-blue transition-colors"
                title="View RFQ List"
              >
                <i className="fa-solid fa-file-invoice text-xl"></i>
                {quoteCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {quoteCount}
                  </span>
                )}
              </button>

              <button
                onClick={openAdmin}
                className="p-2 text-slate-400 hover:text-primary-blue transition-colors"
                title="Management Console"
              >
                <i className="fa-solid fa-gear text-xl"></i>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={openAdmin}
              className="p-2 text-slate-400"
            >
              <i className="fa-solid fa-gear text-xl"></i>
            </button>
            <button
              onClick={openRFQ}
              className="relative p-2 text-slate-600"
            >
              <i className="fa-solid fa-file-invoice text-xl"></i>
              {quoteCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {quoteCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 focus:outline-none"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 pb-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-primary-blue py-2 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setLang(lang === Language.EN ? Language.AM : Language.EN);
                setIsOpen(false);
              }}
              className="text-left text-primary-blue font-bold py-2"
            >
              {lang === Language.EN ? 'Switch to Amharic' : 'ወደ እንግሊዝኛ ቀይር'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
