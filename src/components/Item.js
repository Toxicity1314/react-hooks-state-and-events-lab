import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  
  function handleButtonClick(){
    setInCart(!inCart)
  }
  return (
    <li className={inCart ? "in-cart" :""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={inCart ? "remove" :"add"}
        onClick = {handleButtonClick}>{inCart ? "remove from cart" :"Add to Cart"}</button>
    </li>
  );
}

export default Item;
