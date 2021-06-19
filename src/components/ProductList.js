import React from "react";

import data from "../data/data.json"

import "./ProductList.css";

function ProductList() {
  return (
    <div className="Product-container">

      {
        
        data.map((product) => {
        return (
          <div  key={product.id}   className="Productlists">
            <img src={product.url} alt="productnames"></img>

            <div className="description">
              <h3>{product.ProductName}</h3>
              <p>{product.price}</p>
              <p>{product.Description}</p>
              <p>{product.Size}</p>
            </div>
          </div>
        );
      })}


      

      
    </div>
  );
}

export default ProductList;
