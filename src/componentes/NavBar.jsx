
import {Link} from 'react-router-dom'



export const NavBar = () => {
  return ( 
    <nav className='flex content-center  '>
        <div className=" justify-self-center h-[100px]  cursor-pointer  ">
       
           
        <Link className="text-white font-mono   text-xl px-6 text-opacity-45 hover:text-slate-50 sm:text-3xl " to="/">Home</Link>
        <Link className="text-white font-mono   text-xl px-6 text-opacity-45 hover:text-slate-50 sm:text-3xl" to="/ProjectContainer">Projects</Link>
            <Link className="text-white font-mono text-xl px-6  text-opacity-45  hover:text-slate-50 sm:text-3xl" to="/Skills">Skills</Link>
        </div>
 
   </nav>
  )
}
