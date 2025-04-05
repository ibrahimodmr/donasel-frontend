import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { label: "ANASAYFA", href: "/anasayfa" },
    { label: "KURUMSAL", href: "/kurumsal" },
    { label: "YATAK ODASI", href: "/urun-kategori/yatak-odasi" },
    { label: "YEMEK ODASI", href: "/urun-kategori/yemek-odasi" },
    { label: "KOLTUK TAKIMI", href: "/urun-kategori/koltuk-takimi" },
    { label: "İLETİŞİM", href: "/iletisim" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={`${process.env.PUBLIC_URL}/donasel_logo.png`}
            alt="Donasel Logo"
            className="w-auto h-12"
          />
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={handleNavToggle} aria-label="Menu Toggle">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Menü - Desktop */}
        <ul className="hidden space-x-6 text-lg font-semibold md:flex">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="transition hover:text-gray-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menü - Mobile */}
      {menuOpen && (
        <ul className="px-4 pb-4 space-y-3 text-lg font-medium text-white bg-black md:hidden">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block py-2 border-b border-white/10"
                onClick={() => setMenuOpen(false)} // Menüden sonra kapansın
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
