import { Outlet} from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import { useState } from "react"




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
        <Outlet context={[shoppingCart, setShoppingCart,isOpen,setIsOpen]} />
      </main>
    </div>
  );
}

export default App
