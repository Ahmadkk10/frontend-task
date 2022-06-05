import React from "react";
import "./Menu.css";
import { CgProfile } from "react-icons/cg";
import { BsHeart, BsBagDash, BsSearch } from "react-icons/bs";

const TopMenu = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="image">
          <a href="https://www.myntra.com/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png"
            alt="myntra"
          />
          </a>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">MEN</a>
            </li>
            <li>
              <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">WOMEN</a>
            </li>
            <li>
              <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">KIDS</a>
            </li>
            <li>
              <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">HOME & LIVING</a>
            </li>
            <li>
              <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">BEAUTY</a>
            </li>
            <li>
              <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">STUDIO</a>
            </li>
          </ul>
        </div>

        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="Search for products, brands and more"
            />
            <button type="submit" class="searchButton">
              <BsSearch />
            </button>
          </div>
        </div>

        <div className="icon-links">
          <ul className="icon-links-desktop">
            <li>
              <a className="Profile" href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
                <CgProfile />
                <span className="cen">Profile</span>
              </a>
            </li>
            <li>
              <a className="Heart" href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
                <BsHeart />
                <span className="cen">Heart</span>
              </a>
            </li>
            <li>
              <a className="Bag" href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
                <BsBagDash />
                <span className="cen">Bag</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopMenu;
