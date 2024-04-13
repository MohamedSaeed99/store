import Header from './components/Header/Header';
import Analytics from './pages/Analytics/Analytics';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetails';

function App() {
  return (
      <main className='h-screen'>
        <Header />
        <div className='p-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/product/:product_id' element={<ProductDetail />} />
          </Routes>
        </div>
      </main>
  )
}

export default App
