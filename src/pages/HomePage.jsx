import { Link } from "react-router-dom"
import { Button } from "../components/Button"

const HomePage = () => {
  return (
    <div className="home-wrapper">
        <h1>Welcome to the DummyShop </h1> 
        <p>This Shop is an Implementation of shopping-cart Created as A project on React For The Odin Project's React course</p>
        <p>Click on the The below Button to visit shop</p>
        <p>Ps: Need To work on styles, I know! but need to move on</p>
        <Button as="Link" classes={["link","home-link"]} to= "/shop">
        Visit shop
        </Button>
        {/* <Link to="/shop">Visit Shop</Link> */}
    </div>
  )
}

export default HomePage