import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {



  const navigate = useNavigate();
  useEffect(()=>{
    const Token = localStorage.getItem("token")

  if(Token== 1){
  
  }else{
    navigate("/")
  }
  })
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our eCommerce website! We are dedicated to providing the best shopping experience for our customers.</p>
      <p>Our mission is to offer high-quality products at competitive prices, delivered with excellent customer service.</p>
      <p>At our online store, you can find a wide range of products including electronics, clothing, accessories, and much more.</p>
      <p>Feel free to browse through our catalog and discover great deals on your favorite items.</p>
      <p>If you have any questions or concerns, don't hesitate to contact our customer support team. We're here to help!</p>
      <p>Thank you for choosing us for your online shopping needs. Happy shopping!</p>
      <style>{`
        .about-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }

        h1 {
          font-size: 2.5em;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.2em;
          line-height: 1.6;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default About;
