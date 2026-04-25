import ScrollToTop from './components/global/scrollToTop'
import Home from './pages/Home'
import Categorias from './pages/Categories'
import ProdutosFinalizados from './pages/FinallyProducts'
import PaginaDoProduto from './pages/PageProduct'
import Sobre from './pages/About'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WhatsappButton from './components/WhatsappButton'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full flex flex-col min-h-screen items-center ">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categorias/:category' element={<Categorias />} />
            <Route path="/:category/:productId" element={<PaginaDoProduto />} />
            <Route path='/produtos-finalizados' element={<ProdutosFinalizados />} />
            <Route path='/sobre' element={<Sobre />} />
          </Routes>
        </main>

        <WhatsappButton />

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
