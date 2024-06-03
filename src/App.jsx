import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { CartProvider } from "./components/context/CartContext"
import ItemDetailContainer from './components/ItemDetailContainer'
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer /> } />
          <Route path={'/categoria/:categoria'} element={<ItemListContainer /> } />
          <Route path={'/item/:id'} element={<ItemDetailContainer /> } />
          <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;
