import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Service = () => {

  const navigate = useNavigate();
  useEffect(()=>{
    const Token = localStorage.getItem("token")

  if(Token== 1){
  
  }else{
    navigate("/")
  }
  })


  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service">
        <h2>Fast Shipping</h2>
        <p>We offer fast and reliable shipping options to ensure that your orders are delivered to you as quickly as possible.</p>
      </div>
      <div className="service">
        <h2>Secure Payment</h2>
        <p>Your payment information is safe and secure with us. We use encryption technology to protect your personal and financial data.</p>
      </div>
      <div className="service">
        <h2>24/7 Customer Support</h2>
        <p>Our dedicated customer support team is available 24/7 to assist you with any questions or concerns you may have.</p>
      </div>
      <style>{`
        .services-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }

        h1 {
          font-size: 2.5em;
          margin-bottom: 20px;
        }

        .service {
          margin-bottom: 30px;
        }

        h2 {
          font-size: 1.8em;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.2em;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Service;
