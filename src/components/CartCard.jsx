import { Button } from "./Button";

// react-icon component
import { IoMdRemoveCircleOutline } from "react-icons/io";


const CartCard = ({product,shoppingCart,setShoppingCart}) => {


  const handleRemoveProduct = (id) => {
    const updatedArray = shoppingCart.filter((product) => (
      product.productId !== id
    ))
    setShoppingCart(updatedArray);
  }



  return (
    <div className="cart-card">
      <div className="cart-card__image-wrapper"><img className="cart-card__image" src={product.productImage} alt="" /></div>
      <section className="cart-card__info">
        <p className="card__info-title">{product.productTitle}</p>
        <span className="card__info-quantity">
          <span>Quantity:</span>
          {product.productQuantity}
        </span>
      </section>
      <section className="cart-card_price">
        <span>Price:{product.productPrice * product.productQuantity}</span>
      </section>
      <Button title="remove"  onClickHandle = {() => {handleRemoveProduct(product.productId)}}>
        Remove <IoMdRemoveCircleOutline />
      </Button>
    </div>
  );
}

export default CartCard