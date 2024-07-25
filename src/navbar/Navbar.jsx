import React, { useState } from "react";
import "./navbar.css";
import { menuItems } from "./menuItems";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => {
    if (dropdownOpen === false) {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }
  };

  return (
    <nav className="nav-container">
      <ul className="desktop-menu">
        {menuItems.map((menu, index) => {
          return (
            <li className="menu-item" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="mobile-menu-container">
        <button className="toggle-btn" onClick={toggleDropDown}>
          {dropdownOpen ? "X" : "Menu"}
        </button>

        {dropdownOpen && (
          <ul className="mobile-menu">
            {menuItems.map((menu, index) => {
              return (
                <li className="menu-item" key={index}>
                  <a href={menu.url}>{menu.title}</a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
