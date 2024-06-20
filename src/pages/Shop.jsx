import useFakeStore from "../customHook/useFakeStore"

const Shop = () => {
    const {storeData, error,loading} = useFakeStore();

    if(loading) {
      return <p>Loading...</p>
    }
    if(error) {
      return <p>Error :{error.message}</p>
    }



  return (
    <div>
        <ul>
        {
          storeData.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Shop