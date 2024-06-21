import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = ({shoppingCart,setIsOpen,isOpen}) => {
  const handleCartOpen = () => {
    setIsOpen(!isOpen)
  }

  const itemCount = shoppingCart.length && shoppingCart.reduce((acc,cur) => (acc + cur.productQuantity),0)
  
  return (
    
    <header>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
      <button className="btn cart-button" data-count ={6} onClick={handleCartOpen}>
        <FaShoppingCart className="cart-icon"  />
        {itemCount > 0 && <span className="cart-icon-stack">{itemCount}</span>}
      </button>
    </header>
  );
}

export default Navbar