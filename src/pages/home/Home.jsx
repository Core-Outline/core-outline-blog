import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { Category } from '../../components/category/Category';
import './Home.css';
import scimImage from '../../assets/images/scim.png';
import placeholderImage from '../../assets/images/placeholder.jpg';
import productRoadmap from '../../assets/images/product-roadmap.jpg';
import benchmarks from '../../assets/images/benchmarks.jpg';
import marketInsights from '../../assets/images/market-insights.jpg';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main-content">
        <section className="featured-posts">
          <h2>Editors' Picks</h2>
          <div className="featured-grid">
            <Link to="/blog/ai-agents-supply-chain" className="post-info-link">
              <div className="featured-post">
                <img src={scimImage} alt="Featured post" />
                <div className="post-info">
                  <span className="category">Featured</span>
                  <h3>AI agents for supercharged Supply Chain and Inventory Management</h3>
                  <p>10 mins read</p>
                </div>
              </div>
            </Link>
            <div className="featured-post">
              <img src={productRoadmap} alt="Featured post" />
              <div className="post-info">
                <span className="category">Featured</span>
                <h3>Core&Outline's product roadmap through 2024</h3>
                <p>4 mins read</p>
              </div>
            </div>
          </div>
        </section>
        <section className="latest-posts">
          <h2>Latest</h2>
          <div className="posts-list">
            <Link to="/blog/ai-agents-supply-chain" className="post-info-link">
              <div className="post-item">
                <img src={scimImage} alt="AI agents for supply chain" />
                <div className="post-info">
                  <span className="category product-updates">Product Updates</span>
                  <h3>AI agents for supercharged Supply Chain and Inventory Management</h3>
                  <p>10 mins read</p>
                </div>
              </div>
            </Link>
            <div className="post-item">
              <img src={productRoadmap} alt="SaaS growth post thumbnail" />
              <div className="post-info">
                <span className="category market-insights">Market Insights</span>
                <h3>Core&Outline's product roadmap through 2024</h3>
                <p>3 mins read</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
