import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
const navigate = useNavigate();
  useEffect(()=>{
    const Token = localStorage.getItem("token")

  if(Token== 1){
  
  }else{
    navigate("/")
  }
  })


  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>If you have any questions or concerns, feel free to reach out to us using the information below:</p>
        <p>Email: anjay95kumar.com</p>
        <p>Phone: 8271593648</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>
      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.513048780919!2d86.30127127440645!3d24.188804821806297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1542933c2e53b%3A0x1a025ebd2f39e06a!2sJhanda%20Maidan%2C%20New%20Barganda%2C%20Giridih%2C%20Jharkhand%20815301!5e0!3m2!1sen!2sin!4v1709919293434!5m2!1sen!2sin"
          width="100%"
           height="250"

          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <style>{`
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }

        h1 {
          font-size: 2.5em;
          margin-bottom: 20px;
        }

        .contact-info {
          margin-bottom: 30px;
        }

        p {
          font-size: 1.2em;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .map-container {
          width: 100%;
          // height: 400px;
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  );
};

export default Contact;

