import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.jpeg";

function NavBAR() {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top pb-3">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="rounded-circle ms-2"
                        style={{ width: "50px", height: "50px" }}
                    />
                    <span className="ms-4 fw-bold">وسائل الإيضاح</span>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 text-end" style={{ direction: "rtl" }}>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" smooth to="/Wsael-El-Edah#home">الرئيسية</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" smooth to="/Wsael-El-Edah#about">من نحن</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" smooth to="/Wsael-El-Edah#activities">النشاطات</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" smooth to="/Wsael-El-Edah#contact">للتواصل</Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className="btn btn-outline-danger fw-bold"
                                href="https://docs.google.com/forms/d/1EhR6K1nX3aaR0Mclwi5-IZYeKyvXnEf8q0nogte_0Fw/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                للتقديم
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBAR;
