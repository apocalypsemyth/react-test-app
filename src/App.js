import './App.css'

import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import CountDown from './components/CountDown'
import ProductList from './components/ProductList'
import ScrollTopButton from './components/ScrollTopButton'

function App() {
  return (
    <>
      <div className='app-container'>
        <div className='app'>
          <Navbar />
          <Carousel />
          <CountDown />
          <ProductList />
        </div>
      </div>
      <ScrollTopButton />
    </>
  )
}

export default App
