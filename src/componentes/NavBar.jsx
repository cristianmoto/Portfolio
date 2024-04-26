
import {Link} from 'react-router-dom'



export const NavBar = () => {
  return ( 
    <nav className='flex content-center '>
        <div className=" justify-between h-[100px] content-center cursor-pointer ">
       
           
        <Link className="text-white font-mono   text-3xl px-6 text-opacity-45 hover:text-slate-50" to="/">Home</Link>
        <Link className="text-white font-mono   text-3xl px-6 text-opacity-45 hover:text-slate-50" to="/ProjectContainer">Projects</Link>
            <Link className="text-white font-mono text-3xl px-6  text-opacity-45  hover:text-slate-50" to="/Skills">Skills</Link>
        </div>
 
   </nav>
  )
}
