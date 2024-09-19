import React from 'react';
import Header from '../../components/header/Header';
import { Category } from '../../components/category/Category';
import './Home.css';
import scimImage from '../../assets/images/scim.png';
import placeholderImage from '../../assets/images/placeholder.jpg';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main-content">
        <section className="featured-posts">
          <h2>Editors' Picks</h2>
          <div className="featured-grid">
            <div className="featured-post">
              <img src={placeholderImage} alt="Featured post" />
              <div className="post-info">
                <span className="category">Featured</span>
                <h3>Core&Outline's product roadmap through 2024</h3>
                <p>4 mins read</p>
              </div>
            </div>
            <div className="featured-post">
              <img src={placeholderImage} alt="Featured post" />
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
              <img src={scimImage} alt="AWS infrastructure rebuild" />
              <div className="post-info">
                <span className="category">How we Build</span>
                <h3>How we build our AWS infrastructure to support great scale</h3>
                <p>21 mins read</p>
              </div>
            </div>
            <div className="post-item">
              <img src={placeholderImage} alt="SaaS growth post thumbnail" />
              <div className="post-info">
                <span className="category">Market Insights</span>
                <h3>SaaS growth remains slow throughout H1 2024</h3>
                <p>3 mins read</p>
              </div>
            </div>
            <div className="post-item">
              <img src={placeholderImage} alt="Team workspaces post thumbnail" />
              <div className="post-info">
                <span className="category">Product Updates</span>
                <h3>Build team workspaces with dashboards and folders</h3>
                <p>2 mins read</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
