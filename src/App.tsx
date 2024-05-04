import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FavPage from "./pages/FavPage"
import Navigation from "./components/Navigation"

function App() {

  return (
   <>
   <Navigation />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/favs" element={<FavPage/>}/>
    </Routes>
   
   </>
  )
}

export default App
