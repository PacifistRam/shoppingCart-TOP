import Navbar from "../components/Navbar"
import CartCard from "../components/CartCard";

import { useOutletContext } from "react-router-dom"
import { Button } from "../components/Button";
import { usDollar } from "../utils/utils";

const Checkout = () => {
  const [shoppingCart,setShoppingCart] = useOutletContext();
  
  const totalQuantity = () =>{
    return shoppingCart.reduce((acc,cur) => (acc + cur.productQuantity) ,0)
  }
  const totalAmount = () => {
    return shoppingCart.reduce((acc,cur) => (acc + (cur.productPrice * cur.productQuantity)),0)
  }

  return (
    <div className="checkout-main-wrapper">
      <h2 className="checkout-header">Checkout Section</h2>
       <div className="checkout-wrapper">
         <div className="mini-cart">
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
              <div className="mini-cart-empty">
                <h2>Your cart Appears to be Empty!</h2>
                <p>Add Some products in your cart</p>
              </div>
            )}
          </div>
          <div className="checkout-section">
            <p>Total items in Cart: <span>{totalQuantity()}</span></p>
            <p>Total amount in Cart:<span>{usDollar(totalAmount())}</span></p>
            <Button classes={["add-cart"]}>
              CheckOut
            </Button>
          </div>
       </div>
    </div>
    
  )
}

export default Checkout