import React from 'react';
import Header from '../../components/header/Header';
import './BlogPost.css';
import scimImage from '../../assets/images/scim.png';
import supplyChainImage from '../../assets/images/supply_chain.png'; // Import the new image
import authorImage from '../../assets/images/tom.jpeg';
import scimVideo from '../../assets/videos/scim_video.mp4';
import NewsletterWidget from '../../components/newsletter/Newsletter';
const SCIM = () => {
  return (
    <div className="blog-post">
      <Header />
      <div className="blog-post-container">

        <div className="featured-image-container">
          <img src={scimImage} alt="AI agents for Supply Chain Management" className="featured-image" />
        </div>
      </div>

      <main className="blog-content">


        <article>

          <div className="post-meta">
            <div className="author-section">
              <img src={authorImage} alt="Author" className="author-image" />
              <div className="author-info">
                <strong>Thomas Tsuma</strong>
                <p className="author-title">Core&Outline</p>
                <a href="https://www.linkedin.com/in/tomitsuma" className="author-social" target="_blank" rel="noopener noreferrer">@ThomasTsuma</a>

              </div>

            </div>

            <span className="read-time">10 mins read</span>
            <span className="publish-date">Published: Aug 13, 2024</span>

          </div>
          
          <header className="post-header">
            <h1>AI agents for supercharged Supply Chain and Inventory Management</h1>
          </header>
          <span className="category product-updates">Product Updates</span>
          <div className="post-body">
            <h2 id="introduction">Introduction</h2>
            <p>In today's fast-paced business world, success hinges almost entirely on efficiency and cost-effectiveness of business practices. At Core&Outline, we've revolutionized this process by leveraging Shaped-Reward Deep Q-Learning, a cutting-edge technique that optimizes supply chain operations and minimizes costs with unparalleled precision. Our innovative approach is reshaping the future of inventory management, driving efficiency and profitability like never before.</p>

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

            <h2 id="the-challenge">The Challenge</h2>
            <p>
              The problem of inventory management is a particularly complex one. On one hand businesses need to ensure they have enough stock to meet demand, but on the other hand, they also need to avoid overstocking, which can lead to waste and increased costs. Worth noting is that the cost of unmet demand is often higher than the cost of excess inventory. There isnt as well a known minimization function for this problem which necessitates a deep learning approach.
              Many businesses struggle with optimizing their supply chain and inventory management due to:</p>
            <ul>
              <li>Unpredictable demand fluctuations</li>
              <li>Complex supplier networks</li>
              <li>Inefficient inventory tracking</li>
              <li>Lack of real-time data analysis</li>
            </ul>
            <p>
              Diving a little deeper into the problem, we also observe the advent of the 'bullwhip effect' which is a phenomenon where demand variability at the consumer level is amplified as it moves up the supply chain. This is because each successive member of the supply chain adds their own layer of uncertainty, leading to a distortion in demand forecasts and subsequent overstocking or stockouts.
            </p>
            <div className="featured-image-container">
              <img src={supplyChainImage} alt="AI agents for Supply Chain Management" className="featured-image" />
            </div>
            <p><strong>Note:</strong>
              This image showcases the flow of information and inventory in a typical supply chain.
            </p>

            <h2 id="our-solution-ai-agents">Our Solution: AI Agents</h2>
            <p>Our new AI agents leverage advanced machine learning algorithms to address these challenges head-on. Here's how they work:</p>
            <h3 id="shaped-reward-deep-q-learning">Shaped Reward Deep Q-Learning</h3>
            <p>
              We utilize Deep Reinforcement Learning to learn an optimal policy that minimizes costs in the supply chain.
              More specifically we apply the concept of Deep Q-Learning with a shaped reward to solve this problem. This approach will be detailed later in this post.
            </p>
            <p>
              <strong>Note:</strong> Deep Q-Learning is a type of reinforcement learning algorithm that uses a deep neural network to learn an optimal policy for a given task. The shaped reward is a reward function that is designed to encourage the AI agent to make decisions that minimize costs and maximize efficiency.
            </p>
            <p>
              As well, we acknowledge the intensive amount of computational power required to train these models and the need to reach near-optimal performance in a reasonable amount of iterations.
              These needs are met with the use of Transfer Learning as pretrained models are largely robust to slight parameter changes and can be fine-tuned for differing number of items, stockout and holdout costs.
              We maintain base models trained on simulated customer demand data that fits into different distributions and these allow our customers to get set up and start working with the models even if they do not have a lot of data at hand.
            </p>

            <h3 id="model-details">Model Details</h3>
            <p>
              The Deep Reinforcement Learning model uses a deep neural network as the Q-function approximator that predicts a semi-optimal policy for minimizing the total cost of the game.
              The DNN works well in practice, but it does not have any theoretical guarantees of convergence at a global minima. Due to the following reasons:
              <ol>
                <li>The game is non-stationary, meaning the underlying cost structure changes as the AI agent makes decisions.</li>
                <li>The game is non-convex, meaning there are multiple local minima, and the AI agent may converge to a suboptimal solution.</li>
                <li>The DNN uses an argmax function which is non-smooth</li>
                <li>The effect if the target network and replay buffer memory on distribution of training samples and gradient are unknown</li>
              </ol>
            </p>
            <h4 id="structure">Structure</h4>
            <p>Let's discuss the structure of the DRL model and subsequently the SRDQN model.</p>
            <strong>States</strong>
            <p>
              These serve as the input to the DNN and are the core of the model. They are the state of the game at a given point t which is within a horizon of T.
              The state of an agent i at time t can be represented as:
            </p>
            <div className="math-formula">
              <p>S<sub>t</sub><sup>i</sup> = [((IL<sub>j</sub><sup>i</sup>)<sup>+</sup>,(IL<sub>j</sub><sup>i</sup>)<sup>-</sup>, OO<sub>j</sub><sup>i</sup>, AO<sub>j</sub><sup>i</sup> , AS<sub>j</sub><sup>i</sup>)]<sup>t</sup><sub>j=t-m+1</sub></p>
            </div>
            <p>IL<sub>j</sub><sup>i</sup> = Inventory level of item j at time t for agent i</p>
            <p>(IL<sub>j</sub><sup>i</sup>)<sup>+</sup> = Positive inventory level of item j at time t for agent i</p>
            <p>(IL<sub>j</sub><sup>i</sup>)<sup>-</sup> = Negative inventory level of item j at time t for agent i</p>
            <p>OO<sub>j</sub><sup>i</sup> = On-Order item j at time t for agent i</p>
            <p>AO<sub>j</sub><sup>i</sup> = Arriving Orders of item j at time t for agent i</p>
            <p>AS<sub>j</sub><sup>i</sup> = Arriving Shipments of item j at time t for agent i</p>

            <p>At any period t, the agent i has historical observation of the game for m periods.</p>
            <div className="math-formula">
              <p>o<sub>t</sub><sup>i</sup> = [((IL<sub>j</sub><sup>i</sup>)<sup>+</sup>,(IL<sub>j</sub><sup>i</sup>)<sup>-</sup>, OO<sub>j</sub><sup>i</sup>, AO<sub>j</sub><sup>i</sup> , AS<sub>j</sub><sup>i</sup>) , ... , ((IL<sub>t</sub><sup>i</sup>)<sup>+</sup>,(IL<sub>t</sub><sup>i</sup>)<sup>-</sup>, OO<sub>t</sub><sup>i</sup>, AO<sub>t</sub><sup>i</sup> , AS<sub>t</sub><sup>i</sup>)]</p>
            </div>
            <p>The reason for limiting this vector size to the last m periods is because, as you can imagine, the vector can grow over time and that makes it difficult for the DNN to handle. The value of m is not set arbitrarily and depends on is adjusted to optimize model performance.</p>

            <strong>Action Space</strong>
            <p>The actions in this game refers to the order quantity of item j from agent i to agent i+1.
              While the order quantity is a continuous value, we discretize it to a set of finite values to make it tractable for the DNN.
              Limiting the cardinality of the action space is done using the d+x rule where d is the demand and x is the order above quantity.
            </p>
            <div className="math-formula">
              <p>x ∈ [a<sub>l</sub>, a<sub>u</sub>] (a<sub>l</sub>, a<sub>u</sub>) ∈ &#8484;</p>
            </div>
            <p>
              Where a<sub>l</sub> and a<sub>u</sub> are the lower and upper bounds of the action space.
              At each time period t ∈ T:
              The agent chooses order quantity q ∈ &#8477; to submit to agent i+1.
            </p>
            <strong>Q-Network</strong>
            <p>
              The DNN outputs a Q_value for each action in a particular state.
              The Q_value is the expected future rewards given the current state and action.
              Training is done using random mini-batches takes from the experience replay memory iteratively until all episodes are completed.
              Q learning starts with an initial guess for Q(s,a) and then proceeds to use an iterative formula to update these values.
            </p>
            <div className="math-formula">
              <p>Q(s,a) = (1 - &alpha;)Q(s<sub>t</sub>,a<sub>t</sub>) + α<sub>t</sub>(r<sub>t+1</sub> + γmaxQ(s<sub>t+1</sub>,a)) , ∀t = 1,2,3... </p>
            </div>

            <p>
              &alpha; is the learning rate<br />
              &gamma; is the discount factor
            </p>

            <p>
              The end result is a RL algorithm that obtains the Q value for any s ∈ S and a =  π(s)
            </p>
            <div className="math-formula">
              <p>Q(s,a) = E [r<sub>t</sub> + γr<sub>t+1</sub> + γ<sup>2</sup>r<sub>t+2</sub> + · · · | s<sub>t</sub> = s, a<sub>t</sub> = a; π]</p>
            </div>
            <p>
              At each state, the agent decides on an action through an ε-greedy algorithm.
              At the start, the value of ε is set to 1 and is decreased exponentially over time until it reaches a value close to 0.
              The value of 1 represent a point of maximum exploration which decreases over time until it reaches a point of maximum exploitation.
              Gradually decreasing the value of ε ensures that the agent explores the environment enough to guarantee convergence on the optimal policy.
              After finding the optimal Q*, one can recover the optimal policy as π*(s) = argmaxQ<sub>a</sub>*(s,a).
            </p>
            <strong>Target Q-Network</strong>
            <p>
              The Neural Networks, while good approximators, can result in unstable or even divergent Q-values due to non-stationarity of data and correlation of observations.
              To address this, we employ a target Q-network that is a slowly adapting copy of the original Q-network.
              This target network is used to compute the target Q-values, which are used to update the original Q-network.
              The use of a target network helps to stabilize the training process and improve the convergence properties of the Q-learning algorithm.
            </p>
            <strong>Experience Replay Memory</strong>
            <p>
              The experience replay memory is a crucial component of the DRL algorithm.
              It stores the experiences of the agent in the form of (state, action, reward, next_state) tuples.
              These experiences are sampled randomly from the memory to train the Q-network.
              The use of experience replay helps to break the correlation between consecutive samples, which can lead to more stable and consistent training.
              Additionally, it allows for the reuse of past experiences, which can further enhance the learning process.
            </p>
            <strong>Discount Factor  &gamma;</strong>
            <p>
              The discount factor determines how 'myopic' the AI agent is.
              Applying a discount factor of 0 effectively ensures that the agent only considers the immediate rewards and not future ones.
              On the other hand, a discount factor of 1 ensures that the agent considers all future rewards equally important.
              In practice, one can use a value between 0 and 1 to balance the trade-off between immediate and future rewards.
            </p>
            <strong>Reward Shaping Function</strong>
            <p>
              As explained earlier, we employ reward shaping to guide the agent towards making decisions.
              Unlike in general Q-learning RL models, we do not use fixed values for rewards but instead shape the reward based on the cost of the action.
              At each time period t ∈ T, the agent chooses order quantity q ∈ &#8477; to submit to agent i+1.
            </p>
            <div className="math-formula">
              <p>
                &#8721;<sup>T</sup><sub>t=1</sub>
                &#8721;<sup>4</sup><sub>i=1</sub>
                c<sub>h</sub><sup>i</sup>
                (IL<sub>t</sub><sup>i</sup>)<sup>+</sup>,
                c<sub>p</sub><sup>i</sup>
                (IL<sub>t</sub><sup>i</sup>)<sup>-</sup>
              </p>
            </div>
            <p>
              Where c<sub>h</sub><sup>i</sup> is the cost of holding inventory and c<sub>p</sub><sup>i</sup> is the cost of shortages.
            </p>
            <p>
              We consider the summation of these costs for the reward of agent i at time t.
              We are also required to consider the information and transportation lead time delays between when the action of making an order is taken and when the effect is observed.
              Hence the reward is only calculated during periods of time when the agent has felt the effect of the action taken.
              Worth noting as well, is that the reward reflects on all actions taken up to time t. It is not possible to decompose r<sub>t</sub><sup>i</sup> into the individual rewards of each action.
              The aim is to minimize:
            </p>
            <div className="math-formula">
              <p>&#8721;<sup>4</sup><sub>i=1</sub>&#8721;<sup>T</sup><sub>t=1</sub> r<sub>t</sub><sup>i</sup> = Total Reward</p>
            </div>
            <p>Which is the total reward for all agents over the entire game.</p>
            <strong>Feedback Scheme</strong>
            <p>
              As stated earlier, the agents only maintain local information of the game and do not have a global view of the entire supply chain.
              Still, they require knowledge of the total reward after each episode of training.
              For this to happen, we implement a penalization procedure in training to provide feedback to the RL agent about how it has played
            </p>
            <p>Let</p>
            <div className="math-formula">
              <p>ω = ∑<sup>4</sup><sub>i=1</sub>∑<sup>T</sup><sub>t=1</sub>r<sub>t</sub><sup>i</sup>/T and τ<sup>i</sup> = ∑<sup>T</sup><sub>t=1</sub>r<sub>t</sub><sup>i</sup>/T</p>
            </div>
            <p>
              be the average reward per period and the average reward of agent i per period respectively.
              At the horizon (period T), for each agent i, we update its observed reward in all T time steps in the experience memory using the following formula:
            </p>
            <div className="math-formula">
              <p>r<sub>t</sub><sup>i</sup> = r<sub>t</sub><sup>i</sup> + β<sub>3</sub><sup>i</sup>(ω - τ<sup>i</sup>), ∀t ∈ 1, ..., T</p>
            </div>

            <p>
              β<sub>i</sub> is the regularization coefficient for agent i.
            </p>
            <strong>Transfer Learning</strong>
            <p>
              Owing to the intense computational power required to train these models, as well as the inadequacy of customer data and the need for quick setups by customers, we developed base models that have been trained on an extensive amount of data.
              These base models are relatively robusts to parameters such as lead times, stocking costs and holding costs being changed.
              Once set up, the models are continuously fine tuned to adapt to the specific needs of the customer without any intervention being needed by the customer.
              This allows for customers to get up and running quickly without having to worry about tuning the models to their specific needs.
            </p>
            <p>
              Assume there exists a source agent i ∈ &#123;1, 2, 3, 4&#125; with trained network S<sub>i</sub> (with a fixed size on all agents), parameters P<sub>1</sub><sup>i</sup> = &#123;|A<sub>1</sub><sup>j</sup>|, c<sub>p<sub>1</sub></sub><sup>j</sup> , c<sub>h<sub>1</sub></sub><sup>j</sup> &#125;, observed demand distribution D<sub>1</sub>, and co-player (i.e., teammate) policy π<sub>1</sub>.
              We consider two models: base and new_customer. The aim is to traing a Neural Network for the ne customer (NN<sub>new_customer</sub>) for a target agent j i ∈ &#123;1, 2, 3, 4&#125;
            </p>
            <p>
              The weight matrix W<sub>base</sub> contained learned weights for the base model such that the W<sub>i</sub><sup>q</sup> denotes the weight between laters q & q+1 of NN<sub>base</sub>. where q ∈ &#123;0, ..., nh&#125; and nh is the number of hidden layers in the NN.
              NN<sub>new_customer</sub> is initialized with to have a similar structure to that of NN<sub>new_customer</sub>.
              We initialize W<sub>new_customer</sub> to be equal to W<sub>base</sub> and then make layers &#123;0,,,k&#125; not-trainable. ensuring k is less than nh. <strong>Note:</strong> a general rule we have is making k the nearest whole number to 0.75*nh but it can also be a tunable parameter.
              NN<sub>new_customer</sub> is trained on the new customer data using a small learning rate &#945; (alpha)
              As you'd expect, the latter layers of the NN (that outputs the Q-value) are still trainable and these have weights that are more dissimilar to those of NN<sub>base</sub>.
            </p>
            <h2 id="benefits">Benefits</h2>
            <p>By implementing our AI agents, businesses can expect:</p>
            <ul>
              <li>Reduced inventory costs</li>
              <li>Improved order fulfillment rates</li>
              <li>Enhanced supplier relationships</li>
              <li>Increased overall supply chain efficiency</li>
            </ul>

            <h2 id="conclusion">Conclusion</h2>
            <p>Our AI agents for supply chain and inventory management represent a significant leap forward in operational efficiency. By harnessing the power of artificial intelligence, businesses can stay ahead of the curve and maintain a competitive edge in today's dynamic market.</p>
          </div>
        </article>
        <NewsletterWidget></NewsletterWidget>
      </main>
    </div>
  );
};

export default SCIM;