import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    const { handleAddToCart, tShirt } = props;
    const { id, name, picture, price } = props.tShirt;
    return (
        <div className='tShirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;