import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { AboutPage } from "./pages/About"
import { Produts } from "./pages/Products"



const App = () => {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop /> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App

