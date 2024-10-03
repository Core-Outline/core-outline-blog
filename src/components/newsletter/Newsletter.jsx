import React, { useState, useEffect } from 'react';
import './newsletter.css';
import { jwtDecode } from 'jwt-decode';

function NewsletterWidget() {


  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);

  const getKeys = async () => {

    const decoded = jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiJ4a2V5c2liLWUxMGIzYWRiZWYzZGFhYmVkOWFiZmYxOTVlOGU1ZTBmZmYxZGFmMjcyZTk3MTNmN2ExYWFhMDRjMzRhODdhYTMtOXljU1p0ZlNkRlZUZlNhWCIsImlhdCI6MTcyNzk1MjgxMH0.1g6SAWef22GO7-zHwAhsEdcCPOlq7s4hGB3F8T4bPLY");
     // Prints the decoded payload
    return decoded;
  }

  const handleSubmit = async (e) => {
    setIsCheckingEmail(true)
    if (validateEmail(email)) {

      setIsSubmitted(true);
      await subscribeToSendinblue(e)
        .then((res) => {
          setMessage('Thank you for subscribing!');
          console.log(res)
        }).catch((error) => {
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
    const apikey = await getKeys();
    console.log(Object.keys(apikey));
    const res = await fetch('https://api.sendinblue.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apikey.apiKey,
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
            onChange={(event) => { setEmail(event.target.value); }}
            required
          />


          <button type="submit" onClick={() => { handleSubmit(email) }}>Subscribe</button>
        </form>
        {
          message &&
          <p>{message}</p>
        }
      </div>
    </div>
  );
}

export default NewsletterWidget;
