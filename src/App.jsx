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
      <div className="container mx-auto w-auto px-5   my-5    sm:w-auto sm:flex sm:px-0 sm:justify-between sm:my-2">
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
