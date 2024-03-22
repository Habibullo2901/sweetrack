import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import Addsupplier from './routes/Addsupplier'
import Productsview from './routes/Productsview'
import Addproducts from './routes/Addproducts'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/home/addsupplier' element={<Addsupplier />}/>
        <Route path='/home/suppliers/:id' element={<Productsview />}/>
        <Route path='/home/addproducts' element={<Addproducts />}/>
      </Routes>
    </>
  )
}

export default App
