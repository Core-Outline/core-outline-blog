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
            <div className="featured-post">
              <img src={productRoadmap} alt="Featured post" />
              <div className="post-info">
                <span className="category">Featured</span>
                <h3>Core&Outline's product roadmap through 2024</h3>
                <p>4 mins read</p>
              </div>
            </div>
            <div className="featured-post">
              <img src={benchmarks} alt="Featured post" />
              <div className="post-info">
                <span className="category">Featured</span>
                <h3>Compare your performance to the market with Core&Outline benchmarks</h3>
                <p>4 mins read</p>
              </div>
            </div>
          </div>
        </section>
        <section className="latest-posts">
          <h2>Latest</h2>
          <div className="posts-list">
            <div className="post-item">
              <img src={scimImage} alt="AI agents for supply chain" />
              <Link to="/blog/ai-agents-supply-chain" className="post-info-link">
                <div className="post-info">
                  <span className="category product-updates">Product Updates</span>
                  <h3>AI agents for supercharged Supply Chain and Inventory Management</h3>
                  <p>21 mins read</p>
                </div>
              </Link>
            </div>
            <div className="post-item">
              <img src={marketInsights} alt="SaaS growth post thumbnail" />
              <div className="post-info">
                <span className="category market-insights">Market Insights</span>
                <h3>SaaS growth remains slow throughout H1 2024</h3>
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
