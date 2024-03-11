import React, { useEffect, useState } from "react";
import "./CartPage.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
const Cartpage = () => {
  const [item, setItem] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const Token = localStorage.getItem("token");

    if (Token == 1) {
    } else {
      navigate("/");
    }

    axios
      .get("http://localhost:5500/getccartitem")
      .then(function (response) {
        setItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [navigate]);

  const handleRemove = (val) => {
    axios.post("http://localhost:5500/getproductid", {
      _id: val,
    });

    axios
      .get("http://localhost:5500/getccartitem")
      .then(function (response) {
        setItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const HanndleInc = async (val) => {
    await axios.post("http://localhost:5500/increment", {
      _id: val,
    });
   await axios
    .get("http://localhost:5500/getccartitem")
    .then(function (response) {
      setItem(response.data);
    })
    
  };

  const HandleDec = async(val) => {
    await axios.post("http://localhost:5500/decrement", {
      _id: val,   
    });

   await axios
    .get("http://localhost:5500/getccartitem")
    .then(function (response) {
      setItem(response.data);
    })
   
  };

  return (
    <>
      <div className="cart-main-container">
        {item.length <= 0 ? 
          <p>No Product Avilable</p>
         : 
          item.map((val, index) => {
            return (
              <div className="cart-conatiner" key={index}>
                <div className="cart-image-container">
                  <img src={val.image} alt="" />
                </div>
                <h2>{val.product_name}</h2>
                <h5>Discription:-{val.dics}</h5>
                <div className="cart-priceButton">
                  <div className="small-button">
                    { val.quantity ===1 ? <button onClick={() => handleRemove(val._id)}><i className="fa-solid fa-trash"/></button> :<button onClick={() => HandleDec(val._id)}>-</button>}
                    <h5>{val.quantity}</h5>
                    <button onClick={() => HanndleInc(val._id)}>+</button>
                  </div>
                  <button onClick={() => handleRemove(val._id)}>
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default Cartpage;
