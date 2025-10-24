import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home"
import { AboutPage } from "./pages/about"
import { HtmlPage } from "./pages/html"
import { CssPage } from "./pages/css"
import { JavascriptPage } from "./pages/javascript"
import { ReactPage } from "./pages/react"
import { AngularPage } from "./pages/angular"





const App = () => {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/html' element={<HtmlPage />} />
          <Route path='/css' element={<CssPage />} />
          <Route path='/javascript' element={<JavascriptPage />} />
          <Route path='/react' element={<ReactPage />} />
          <Route path='/angular' element={<AngularPage />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App

