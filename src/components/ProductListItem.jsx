import React,{useContext} from 'react';
import {ShoppingContext} from "./context/ShoppingContext";
import "../App.css"

export default function ProductListItem({product}) {
  const {addToCart} = useContext(ShoppingContext);

  return (
    <div className="col-md-4">
        <div className="cardd mb-9">
            <div className='img'>
                <img src={product.image} alt={product.name} />
            </div>
            <div className="content">
                <h1>{product.name}</h1>
                <button className="btn btn-primary"
                    onClick={() => addToCart(product) 
                    }>
                    <i className="bi bi-cart-check-fill"></i> Add to cart
                </button>
            </div>
        </div>
    </div>
  )
}
