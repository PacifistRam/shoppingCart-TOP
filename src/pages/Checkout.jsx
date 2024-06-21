import Navbar from "../components/Navbar"

import { useOutletContext } from "react-router-dom"

const Checkout = () => {
  const [state,setState] = useOutletContext();
  
  return (
    <div>
      <div>Checkout:{state}</div>
    </div>
    
  )
}

export default Checkout