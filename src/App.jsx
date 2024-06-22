import { Outlet} from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import { useState } from "react"

import MiniCart from "./components/MiniCart.jsx"


function App() {
  
   const[shoppingCart,setShoppingCart]  =useState([])
   const [isOpen,setIsOpen] = useState(false);
  
  return (
    <div className="main-wrapper">
      <Navbar
        shoppingCart={shoppingCart}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <main>
        <Outlet context={[shoppingCart, setShoppingCart,]} />
        <MiniCart
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      </main>
    </div>
  );
}

export default App
