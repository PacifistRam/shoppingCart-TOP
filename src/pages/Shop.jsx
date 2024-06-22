// custom hook import
import useFakeStore from "../customHook/useFakeStore";

//component import
import ProductCard from "../components/ProductCard";
import MiniCart from "../components/MiniCart";

// react router dom utilities import
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { storeData, error, loading } = useFakeStore();

  const [shoppingCart, setShoppingCart] = useOutletContext();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :{error.message}</p>;
  }

  return (
    <div>
      <ul className="product-grid">
        {storeData.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Shop;
