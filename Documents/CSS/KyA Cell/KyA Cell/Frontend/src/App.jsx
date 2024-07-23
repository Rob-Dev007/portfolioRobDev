import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Header from './layouts/header';
import Inicio from './pages/inicio';
import Footer from './layouts/footer';
import Servicios from './pages/servicios';
import Blog from './pages/blog';
import Contactanos from './pages/Contactanos';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route>
              <Route index path='/' element={ <Inicio /> } />
              <Route path='/servicios' element={ <Servicios /> } />
              <Route path='/blog' element={ <Blog />} />
              <Route path='/contactanos' element={ <Contactanos /> } />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  </>
  )
}

export default App
