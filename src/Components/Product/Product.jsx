import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.handleAddtoCart);
    const {img, name, price, ratings, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-manufact'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings}</p>
            </div>
            <button onClick={() => props.handleAddtoCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faCartShopping} />
                </button>
        </div>
    );
};

export default Product;