import {  BrowserRouter,Route,Routes } from "react-router-dom"
import Cal from "./components/CAl"
import Modle from "./components/MD1"
import Crd from "./components/CRD"
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/ca" element={<Cal/>}/>
      <Route path="/md" element={<Modle/>}/>
      <Route path="/r" element={<Crd/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App



   