"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoIcon from '@/assets/images/logo.svg';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <nav className="navbar">
        <div className="navbarLogo">
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Image src={logoIcon} alt="ScreamFlix Logo" width={44} height={44} className="logoImg" />
          <Link href="/" className="navbarLogoText">
            ScreamFlix
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="navbar-links">
          <li><Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link href="/movies" className={pathname === "/movies" ? "active" : ""}>All Movies</Link></li>
          <li><Link href="/movies/decades" className={pathname === "/movies/decades" ? "active" : ""}>Decade Picks</Link></li>
          <li><Link href="/movies/reviews" className={pathname === "/movies/reviews" ? "active" : ""}>Reviews</Link></li>
          <li><Link href="/movies/about" className={pathname === "/movies/about" ? "active" : ""}>About</Link></li>
        </ul>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <button className="close-btn" onClick={closeMenu}>&times;</button>
            <ul>
              <li><Link href="/" className={pathname === "/" ? "active" : ""} onClick={closeMenu}>Home</Link></li>
              <li><Link href="/movies" className={pathname === "/movies" ? "active" : ""} onClick={closeMenu}>All Movies</Link></li>
              <li><Link href="/movies/decades" className={pathname === "/movies/decades" ? "active" : ""} onClick={closeMenu}>Decade Picks</Link></li>
              <li><Link href="/movies/reviews" className={pathname === "/movies/reviews" ? "active" : ""} onClick={closeMenu}>Reviews</Link></li>
              <li><Link href="/movies/about" className={pathname === "/movies/about" ? "active" : ""} onClick={closeMenu}>About</Link></li>
            </ul>
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      </nav>
      </>
  );

}
