import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {

  return (
    <>
    <h1>E-Comerce</h1>
      <NavBar />
      <hr />
      <ItemListContainer color="red" greeting="Bienvenidos a tienda RodriTec"/>
    </>
  )
}

export default App