import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Card = ({
    brand,
    description,
    id,
    name,
    preview,
    price,
    addProduct,
}) => {

    return ( 
        <div>
          
            <div className="card-wrapper" key={id}>
                <Link to={`/product/${id}`}>
                <img src={preview} alt={brand}/>
                </Link>
                  <div className="card-info">
                    <p>{name}</p>
                    <button   onClick={ addProduct }>
                      ADD Cart
                    </button>
                    <p>Rs: ₹{price}</p>
                  </div>
            </div>
              
        </div> 
    );
}
 
export default Card;