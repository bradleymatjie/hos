import React, { useState } from 'react';
import './newsletter.scss';

export const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event:any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log('Subscribed with email:', email);
    
    setEmail('');
    setSubmitted(true);
  };

  return (
    <section className="subscribe">
      <h1>Subscribe to our newsletter</h1>
      <p>And receive monthly email on how we can improve your business</p>
      <form onSubmit={handleSubmit}>
        {submitted ? <p className='submitted'>Thanks for signing up for the Vigor Crossfit Gym Center newsletter! One of our support team will be in touch with you soon.</p> : <input
          type="email"
          placeholder="name@mail.com"
          value={email}
          onChange={handleEmailChange}
          required
        />}
        {!submitted && <button type="submit">SUBSCRIBE</button>}
      </form>
      <span>We don't spam. I mean... Spam is in a can. Why would we put your email in a can?</span>
    </section>
  );
};