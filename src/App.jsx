import useFakeStore from "./customHook/useFakeStore"

function App() {
  
    const {storeData, error,loading} = useFakeStore();

    if(loading) {
      return <p>Loading...</p>
    }
    if(error) {
      return <p>Error :{error.message}</p>
    }


  return (
    <>
      <ul>
        {
          storeData.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
