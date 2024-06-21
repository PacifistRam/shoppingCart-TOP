import { MdClose } from "react-icons/md";

import CartCard from "./CartCard";
import { Button } from "./Button";

const MiniCart = ({ shoppingCart, setShoppingCart, isOpen, setIsOpen }) => {
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="cart-main-wrapper">
      {isOpen && <div className={`overlay show `} onClick={toggleOpen}></div>}

      <div className={`mini-cart-wrapper ${isOpen ? 'open' : '' }`}>
      <Button onClickHandle={toggleOpen}><MdClose  /></Button>
        <div className="mini-cart">
          <h1>Shopping Cart</h1>
          {shoppingCart.length > 0 ? (
            <div className="mini-Cart-grid__wrapper">
              <ul className="mini-cart-grid">
                {shoppingCart.map((product) => (
                  <li key={product.productId}>
                    <CartCard
                      product={product}
                      shoppingCart={shoppingCart}
                      setShoppingCart={setShoppingCart}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="miniCart-empty">
              <p>Your cart Appears to be Empty!</p>
              <p>Add Some products in your cart</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
