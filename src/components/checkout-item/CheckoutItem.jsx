import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const clearCartItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity flex'>
        <div className='arrow cursor-pointer' onClick={removeItemHandler}>&#10094;</div>
        <span className='value mx-[10px]'>{quantity}</span>
        <div className='arrow cursor-pointer' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearCartItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
