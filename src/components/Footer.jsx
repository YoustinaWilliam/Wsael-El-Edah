import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center pt-4" >
      {/* Social Icons */}
      <div className="mb-3">
        <a href="https://www.facebook.com/profile.php?id=100009405296410" target="_blank" className="text-white mx-2 fs-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://wa.me/201226111639" target="_blank" className="text-white mx-2 fs-4">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://youtube.com/channel/UC49mRUePBovzeRTls1Yz6WQ?si=giAo1U6dUnPeoQD2" target="_blank" className="text-white mx-2 fs-4">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="mb-3">
        <Link className="text-white mx-2 text-decoration-none" smooth to="/#home">الرئيسية</Link>
        <Link className="text-white mx-2 text-decoration-none" smooth to="/#about"> من نحن </Link>
        <Link className="text-white mx-2 text-decoration-none" smooth to="/#activities"> النشاطات </Link>
        <Link className="text-white mx-2 text-decoration-none" smooth to="/#contact"> التواصل</Link>

      </div>

      {/* Copyright */}
      <div className="bg-black py-2">
        <small>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة - تصميم خدمة وسائل الإيضاح</small>
      </div>
    </footer>
  );
};

export default Footer;
