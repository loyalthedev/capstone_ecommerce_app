import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button className={`mt-auto`}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
