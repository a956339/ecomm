import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [state, setstate] = useState(false);

  const Handleicon = () => {
    setstate(!state);
  };


  const handleLogout =()=>{
    localStorage.removeItem("token")
    navigate('/')
  }

  

  return (
    <>
      <nav>
        <div className="left">
          <p>Logo</p>
        </div>
        <div className="right">
          <Link to="/Home">Home</Link>
          <Link to="/Services">Services</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <div>
            <i
              className="fa-solid fa-cart-shopping"
              onClick={() => navigate("/Cartpage")}
            />
            <sup>0</sup>
          </div>
        </div>

        <div className="" style={{ display: "flex", gap: "30px" }}>
          <div className="carticon">
            <i
              className="fa-solid fa-cart-shopping"
              onClick={() => navigate("/Cartpage")}
            />
            <sup>0</sup>
          </div>
          <div className="toggle-bar">
            <i className="fa-solid fa-bars-staggered" onClick={Handleicon} />
          </div>
        </div>
      </nav>

      <div>
        {state ? (
          <div className="side-menu">
            <div className="side-image-container">
              <div className="photo">
                <img
                  src="https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png"
                  alt=""
                />
              </div>
            </div>
            <div className="side-routes">
              <Link to="/Home">Home</Link>
              <Link to="/Services">Services</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
            </div>

            <button
              style={{
                height: "30px",
                width: "50%",
                position: "absolute",
                bottom: 10,
                left: 70,
              }} onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
