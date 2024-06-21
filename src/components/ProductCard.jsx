import { Button } from "./Button";

const ProductCard = ({product,shoppingCart,setShoppingCart}) => {

  const handleShoppingCArt = (id, title, imageUrl, price) => {
    const foundProduct = shoppingCart.find(
      (product) => product.productId === id
    );
    if (foundProduct) {
      const updatedCart = shoppingCart.map((product) =>
        product.productId
          ? { ...product, productQuantity: product.productQuantity + 1 }
          : product
      );
      setShoppingCart(updatedCart)
    } else {
      const cartItem = {
        productId: id,
        productTitle: title,
        productImage: imageUrl,
        productPrice: price,
        productQuantity: 1,
      };
      console.log(cartItem);
      setShoppingCart((prevCart) => [...prevCart, cartItem]);
    }

    console.log(shoppingCart);
  };


  return (
    <div className="product-card">
      <img
        className="product-card__img"
        src={product.image}
        alt={`image of ${product.title}`}
      />
      <h2 className="product-card__title">{product.title}</h2>
      <span className="product-card__price">{product.price}</span>
      <div className="card-btn-wrapper">
        <Button  action = "add cart" onClickHandle = {() => {handleShoppingCArt(product.id,product.title,product.image,product.price)}} >
        Add To Cart
        </Button>
      </div>
    </div>
  );
}


export default ProductCard