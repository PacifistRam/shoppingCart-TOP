import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
        <h2>This is Homepage</h2> <br />
        <Link to="/shop">Visit Shop</Link>
    </div>
  )
}

export default HomePage