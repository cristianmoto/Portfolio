import { Contacto } from "./componentes/Contacto"
import { Header } from "./componentes/Header"
import { Home } from "./componentes/Home"
import { NavBar } from "./componentes/NavBar"
import ProjectContainer from "./componentes/ProjectContainer"
import { Skills } from "./componentes/Skills"
import { BrowserRouter, Route, Routes} from 'react-router-dom'





function App() {
 

  return (
    <> 
     <BrowserRouter>
      <div className="container mx-auto my-6 flex justify-between gap-5">
        <Header/>
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProjectContainer" element={<ProjectContainer/>}/>
        <Route path="/Skills" element={<Skills/>}/>
       
      </Routes>
<Contacto/>
    </BrowserRouter>
    
    </>

  )
}

export default App
