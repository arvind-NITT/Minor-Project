import React from 'react'
import "./bootstrap.min.css";
import "./style.css";
import logo from "../images/NITT_logo.png";
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
                <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
                <a href='index.html' className="navbar-brand p-2">
            
                <img src={logo} width="90px" alt="NITT"/>&ensp;
        </a>
                    <a href="index.html" className="navbar-brand">
                        <h1 className="m-0 display-5 text-uppercase text-white"><i className="bi bi-building text-primary me-2"></i>NIt Trichy</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Forms</a>
                                <div className="dropdown-menu m-0">
                                    <Link to="/form" className="dropdown-item">Form1</Link>
                                    {/* <a href="project.html" className="dropdown-item">From 1</a> */}
                                    <Link to="/form1_l2" className="dropdown-item">Form2</Link>
                                    <Link to="/form2_l2" className="dropdown-item">Form2</Link>
                                    <a href="blog.html" className="dropdown-item">Form 4</a>
                                    <a href="detail.html" className="dropdown-item">Form 5</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                            <a href="" className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Logout <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </nav>
                </div>

            
        </div>
    )
}
