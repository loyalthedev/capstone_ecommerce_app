import Button from '../Button/Button';
import './CartDropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items p-5">
            <Button className={`mt-auto`}>Go To Checkout</Button> 
        </div>
    </div>
  )
};

export default CartDropdown;
