
import {Link} from 'react-router-dom'



export const NavBar = () => {
  return ( 
    
        <nav className="flex justify-between py-5   sm:flex h-[100px] sm:flex-none sm:py-5 ">
       
           <div>
           <Link className="text-white font-mono   text-xl px-6 text-opacity-45 hover:text-slate-50 sm:text-3xl " to="/">Home</Link>
           </div>
            <div>
               <Link className="text-white font-mono   text-xl px-6 text-opacity-45 hover:text-slate-50 sm:text-3xl" to="/ProjectContainer">Projects</Link>
            </div>
           <div>
             <Link className="text-white font-mono text-xl px-6  text-opacity-45  hover:text-slate-50 sm:text-3xl" to="/Skills">Skills</Link>
           </div>
           
       
 
   </nav>
  )
}
