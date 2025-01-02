import { Routes, Route } from "react-router-dom"

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Page/Home"
import BlogDetail from "./Page/BlogDetail"

function App() {

  return (
    <>
      <div className="p-[20px]">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog-detail/:id" element={<BlogDetail />} />
          </Routes>
      </div>
      <Footer /> 
    </> 
  )
}

export default App
