import { usDollar } from "../utils/utils";
import { Button } from "./Button";

// react-icon component
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaPlus,FaMinus } from "react-icons/fa6";


const CartCard = ({product,shoppingCart,setShoppingCart}) => {
  const handleCount = (id,minus) => {
    const updatedArray = shoppingCart.map(product =>{
      if(product.productId === id) {
        let newQuantity;
        if(minus) {
          newQuantity = product.productQuantity >1 ? product.productQuantity - 1 : product.productQuantity
        } else {
          newQuantity = product.productQuantity < 10 ? product.productQuantity + 1 : product.productQuantity 
        }
        return {...product,productQuantity: newQuantity}
      }
      return product
    })
    setShoppingCart(updatedArray.filter(product => product.productQuantity > 0))
  }

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
          <Button classes = {["plus-min-icon"]} onClickHandle={()=>{handleCount(product.productId,true)}}> <FaMinus /></Button>
          {product.productQuantity}
          <Button classes = {["plus-min-icon"]} onClickHandle={()=>{handleCount(product.productId,false)}}><FaPlus /></Button>
        </span>
      </section>
      <section className="cart-card_price">
        <span>Price:{usDollar(product.productPrice * product.productQuantity)}</span>
      </section>
      <Button title="remove"  onClickHandle = {() => {handleRemoveProduct(product.productId)}}>
        Remove <IoMdRemoveCircleOutline />
      </Button>
    </div>
  );
}

export default CartCard