import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <header className="header">
        <p className="name">John <span>Smith</span></p>
        <p className="position">Project Manager</p>
        <div className="contact-item-container">
          <div className="contact-half-container">
            <div className="contact-item">
              <h3>Phone: </h3>
              <p>08098764432</p>
            </div>
            <div className="contact-item">
              <h3>Email: </h3>
              <p>j.smith@uptowork.com</p>
            </div>
          </div>
          <div className="contact-half-container">
            <div className="contact-item">
              <h3>LinkedIn: </h3>
              <p>linkedin.com/johnutw</p>
            </div>
            <div className="contact-item">
              <h3>Twitter: </h3>
              <p>@johnsmithutw</p>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;
