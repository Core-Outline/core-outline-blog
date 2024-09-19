import React from 'react';
import './header.css';
import favicon from '../../assets/images/favicon.ico';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={favicon} alt="Core&Outline logo" className="logo-icon" />
          <div className="logo-text">Core&Outline</div>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="/">All</a></li>
            <li><a href="/product-updates">Product Updates</a></li>
            <li><a href="/market-insights">Market Insights</a></li>
            <li><a href="/gtm">GTM</a></li>
            <li><a href="/retention">Retention</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/funding">Funding</a></li>
            <li><a href="/how-we-build">How we Build</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
