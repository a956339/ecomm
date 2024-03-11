import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();


 
  const [item , setItem] = useState([]);

useEffect(()=>{

const Token = localStorage.getItem("token")

if(Token== 1){

}else{
  navigate("/")
}


  axios.get("http://localhost:5500/get-product")
  .then(function (response) {
    setItem(response.data);
    
  })
  .catch(function (error) {
    console.log(error);
  });
},[])


const handleAddtoCart=(val)=>{
  axios.post("http://localhost:5500/postitemcart",{
    product_name: val.product_name,
    price: val.price,
    dics: val.dics,
    image: val.image,
    quantity: val.quantity
  })

 
}

  return (

<div className="main-container">

{ item.length <=0 ? <p>No Product Avilable</p> :
  item.map((val , index)=>{
   return(
    <div className="conatiner" key={index}>
      <div className="image-container">
<img src={val.image} alt="" />
      </div>
      <h2>{val.product_name}</h2>
      <h5>Discription:-{val.dics}</h5>
      <div className="priceButton">
      <h5>Price: ${val.price}</h5>
      <button onClick={()=>handleAddtoCart(val)} >Add to cart</button>
      </div>

    </div>
   )
  })
}

</div>
 
  );
}

export default Home



