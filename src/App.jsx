import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
import Checkout from "./pages/Checkout"


const router = createBrowserRouter([
  {
    path: "/",
    element:<Shop />,
  },
  {
    path: "/checkout",
    element:<Checkout />,
  },
])

function App() {
  
   

  return (
    <>
      <Navbar />
      <RouterProvider router = {router} />
    </>
  )
}

export default App
