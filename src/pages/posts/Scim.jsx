import React from 'react';
import Header from '../../components/header/Header';
import './BlogPost.css';
import scimImage from '../../assets/images/scim.png';
import scimVideo from '../../assets/videos/scim_video.mp4'; // Import the video file

const SCIM = () => {
  return (
    <div className="blog-post">
      <Header />
      <main className="blog-content">
        <article>
          <header className="post-header">
            <h1>AI agents for supercharged Supply Chain and Inventory Management</h1>
            <div className="post-meta">
              <span className="category product-updates">Product Updates</span>
              <span className="read-time">21 mins read</span>
              <span className="publish-date">Published: Aug 13, 2024</span>
            </div>
          </header>
          <img src={scimImage} alt="AI agents for Supply Chain Management" className="featured-image" />
          <div className="post-body">
            <h2>Introduction</h2>
            <p>In today's fast-paced business world, success hinges on efficient supply chain and inventory management. At Core&Outline, we've revolutionized this process by leveraging Shaped-Reward Deep Q-Learning, a cutting-edge technique that optimizes supply chain operations and minimizes costs with unparalleled precision. Our innovative approach is reshaping the future of inventory management, driving efficiency and profitability like never before.</p>

            {/* Add the video element here */}
            <div className="video-container">
              <video controls width="100%">
                <source src={scimVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="video-caption">
                <strong>Note:</strong> This video showcases our AI agent playing MIT's 'Beer Game', 
                a simulation of supply chain dynamics. The game demonstrates how our AI optimizes 
                inventory management and decision-making in complex supply chain scenarios.
              </p>
            </div>

            <h2>The Challenge</h2>
            <p>
              The problem of inventory management is a particularly complex one. On one hand businesses need to ensure they have enough stock to meet demand, but on the other hand, they also need to avoid overstocking, which can lead to waste and increased costs. Worth noting is that the cost of unmet demand is often higher than the cost of excess inventory. The isnt as well a known minimization function for this problem which necessitates a deep learning approach.
              Many businesses struggle with optimizing their supply chain and inventory management due to:</p>
            <ul>
              <li>Unpredictable demand fluctuations</li>
              <li>Complex supplier networks</li>
              <li>Inefficient inventory tracking</li>
              <li>Lack of real-time data analysis</li>
            </ul>

            <h2>Our Solution: AI Agents</h2>
            <p>Our new AI agents leverage advanced machine learning algorithms to address these challenges head-on. Here's how they work:</p>
            <ol>
              <li><strong>Demand Forecasting:</strong> AI agents analyze historical data, market trends, and external factors to predict future demand with high accuracy.</li>
              <li><strong>Supplier Optimization:</strong> The AI evaluates supplier performance and suggests the most efficient sourcing strategies.</li>
              <li><strong>Real-time Inventory Tracking:</strong> Using IoT integration, our AI agents provide up-to-the-minute inventory status across all locations.</li>
              <li><strong>Automated Reordering:</strong> Based on demand forecasts and inventory levels, the AI can automatically place orders to maintain optimal stock levels.</li>
            </ol>

            <h2>Benefits</h2>
            <p>By implementing our AI agents, businesses can expect:</p>
            <ul>
              <li>Reduced inventory costs</li>
              <li>Improved order fulfillment rates</li>
              <li>Enhanced supplier relationships</li>
              <li>Increased overall supply chain efficiency</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Our AI agents for supply chain and inventory management represent a significant leap forward in operational efficiency. By harnessing the power of artificial intelligence, businesses can stay ahead of the curve and maintain a competitive edge in today's dynamic market.</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default SCIM;