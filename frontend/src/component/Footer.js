import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* footer */}
            <div className="footer container-fluid position-absolute bg-dark bg-light-radial text-white-50 py-4 px-5">
                <div className="row g-5">
                    <div className="col-lg-6 pe-lg-5">
                    
                        <a href="index.html" className="navbar-brand">
                            <h1 className="m-0 display-4  text-white"><i className="bi bi-building text-primary me-2"></i>Nit Trichy</h1>
                        </a>
                        <p>National Institute of Technology
                            Tiruchirappalli - 620015
                            Tamil Nadu, INDIA
                            Fax: +91-431-2500133</p>

                        <p><i className="fa fa-phone-alt me-2"></i>+91-431-2500133</p>
                        <p><i className="fa fa-envelope me-2"></i>nitt.edu</p>

                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="row g-5">
                            <div className="col-sm-6">
                                <h4 className="text-white text-uppercase mb-4">Quick Links</h4>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</a>
                                    <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</a>
                                    <a className="text-white-50" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
