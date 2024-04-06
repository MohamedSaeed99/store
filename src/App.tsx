import Header from './components/Header/Header';
import Analytics from './pages/Analytics/Analytics';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <main className='h-screen'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/analytics' element={<Analytics />} />
        </Routes>
      </main>
  )
}

export default App
