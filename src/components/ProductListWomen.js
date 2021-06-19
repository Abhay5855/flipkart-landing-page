import React from 'react'
import Products from "../products.json"
import "./ProductListWomen.css"
function ProductListWomen() {
    return (
        <div className="womencontainer">



           {Products.Womensection.map((product) => {
        return (
          <div className="Productlistswomen">
            <img src={product.url1} alt="productnameswomen"></img>

            <div className="description">
              <h3>{product.ProductName1}</h3>
              <p>{product.price1}</p>
              <p>{product.Description1}</p>
              <p>{product.Size1}</p>
            </div>
          </div>
        );
      })}


            
        </div>
    )
}

export default ProductListWomen
