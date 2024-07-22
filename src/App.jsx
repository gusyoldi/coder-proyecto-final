import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import ItemListContainer from './components/Item/ItemListContainer'
import Layout from './components/Layout'
import NotFound from './components/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout />} >
          <Route index element={<ItemListContainer />} />
          <Route path='category/:id' element={<ItemListContainer />} />
          <Route path='item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter >

  )
}

export default App
