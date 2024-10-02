import React, { useState } from 'react';
import './newsletter.css';

function NewsletterWidget() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const apikey = "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"

  const handleSubmit = async (e) => {
    setIsCheckingEmail(true)
    if (validateEmail(email)) {
      
      setIsSubmitted(true);
      await subscribeToSendinblue(e)
      .then((res)=>{
        setMessage('Thank you for subscribing!');
        console.log(res)
      }).catch((error)=>{
        setMessage('Try again later.');
        console.log(error)
      })
      
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
    setIsCheckingEmail(false)
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const subscribeToSendinblue = async (email) => {
    const res = await fetch('https://api.sendinblue.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apikey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [3],
      }),
    });
    return res.json();
  };

  return (
    <div className="newsletter-widget">
        <div>
      <h2>Core&Outline Roundup: Your Weekly Briefing</h2>
      <p>Get the best insights on SaaS performance and AI/ML advancement in the workplace delivered straight to your inbox every Friday.</p>
      </div>
      <div>
      <h2 className='newsletter-subscribe-title'>Subscribe to my newsletter</h2>
      <form className="newsletter-form">

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(event) => {setEmail(event.target.value);}}
          required
        />
        {
            message &&
            <p>{message}</p>
        }
        
        <button type="submit" onClick={()=>{handleSubmit(email)}}>Subscribe</button>
      </form>
      </div>
    </div>
  );
}

export default NewsletterWidget;
