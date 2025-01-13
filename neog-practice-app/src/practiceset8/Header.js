import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="nav-items">
          <ul>
            <li>
              <NavLink to="/">Product Listing</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">WishList</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
