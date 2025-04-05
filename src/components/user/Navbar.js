import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'ANASAYFA', href: '/anasayfa' },
    { label: 'KURUMSAL', href: '/kurumsal' },
    { label: 'YATAK ODASI', href: '/urun-kategori/yatak-odasi' },
    { label: 'YEMEK ODASI', href: '/urun-kategori/yemek-odasi' },
    { label: 'KOLTUK TAKIMI', href: '/urun-kategori/koltuk-takimi' },
    { label: 'İLETİŞİM', href: '/iletisim' }
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="/anasayfa">
          <img
            src={`${process.env.PUBLIC_URL}/donasel_logo.png`}
            alt="Donasel Logo"
            className="w-auto h-10"
          />
        </a>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden space-x-6 text-lg font-medium md:flex">
          {navItems.map((item, i) => (
            <li key={i}>
              <a href={item.href} className="transition hover:text-gray-300">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="px-4 pb-4 space-y-3 text-lg font-medium bg-black md:hidden">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="block py-2 border-b border-white/10"
                onClick={() => setIsOpen(false)} // tıklayınca menü kapanır
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
