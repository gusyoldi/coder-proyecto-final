import ItemDetailContainer from './components/Item/ItemDetailContainer'
import ItemListContainer from './components/Item/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='bg-gray-100 pb-14 space-y-12'>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>

  )
}

export default App
