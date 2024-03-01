// Import React library
import React from 'react';
// Import CSS file for navbar styling
import '../Css/NavBar.css';

// Functional component for the navigation bar
const NavBar = () => {
  return (
    <>
      {/* Navigation bar */}
      <nav className="navbar">
        {/* Search bar */}
        <div className="navbar-search">
          <input type="text" className="search-input" />
        </div>
        {/* List of navigation links */}
        <ul>
          {/* Navigation link for categories */}
          <li className='categories'><a href="#categories">Categories</a></li>
          {/* Navigation link for website builder */}
          <li><a href="#website-builder">Website Builder</a></li>
          {/* Navigation link for today's deals */}
          <li><a href="#todays-deals">Today's Deals</a></li>
        </ul>
      </nav>
    </>
  );
}

// Export the NavBar component
export default NavBar;
