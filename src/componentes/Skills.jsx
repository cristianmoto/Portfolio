import Bs from '../assets/icons/Boostrap.svg'
import css from '../assets/icons/css.svg'
import git from '../assets/icons/github.svg'
import html from '../assets/icons/html.svg'
import js from '../assets/icons/js.svg'
import rjs from '../assets/icons/react.svg'
import sf from '../assets/icons/salesforce.svg'
import twd from '../assets/icons/tailwind.svg'


export const Skills = () => {
  return (
    <section className=" container mx-auto my-40 text-center cursor-pointer">
     <h2 className="text-7xl text-stone-100 font-mono hover:text-pink-800 py-4">Skills</h2> 
    <h2  className="text-xl text-stone-100 text-opacity-40 italic pb-5  hover:text-pink-500 sm:text-3xl"> A lo largo de mi formacion como Frontend, aprendi habilidades muy utiles para la creación de Aplicacions Webs creativas y vistozas, las cuales me ayudan a crear proyectos profesionales. </h2>
   
     <div className="flex h-[120px] py-4 px-auto justify-between">
       
        <img  className= "bg-violet-700 rounded"  src={Bs} alt="boostrap"/>
        <img className= "bg-orange-600 rounded"  src={css} alt="css"/>
        <img className= "bg-black rounded"  src={git} alt="github"/>
        <img className= "bg-cyan-600 rounded"  src={rjs} alt="reactJs"/>
        <img className= "bg-blue-600 rounded"  src={html} alt="html"/>
        <img className= "bg-yellow-600 rounded"  src={ js} alt="javascript"/>
        <img className= "bg-blue-500 rounded"  src={sf} alt="salesforce"/>
        <img className= "bg-teal-700 rounded"  src={twd} alt="tailwind"/>

     </div>
     </section>
  )
}