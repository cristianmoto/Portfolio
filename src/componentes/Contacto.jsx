import linkedin from '../assets/logos/linkedin.svg'
import github from '../assets/logos/github.svg'
import mail from '../assets/logos/mail.svg'
import resume from '../assets/logos/resume.svg'
import cv from '../assets/ResumeActual.pdf'

export const Contacto = () => {
  return (
    <div className=" justify-between h-[150px] content-bottom cursor-pointer flex container mx-auto border-t-2 py-6  align-bottom ">
      
    <a className="text-white font-mono   text-2xl  text-opacity-45 hover:text-slate-50" href="https://www.linkedin.com/in/cristian-e-aguirre/?originalSubdomain=ar" target='_blank'>  <img  className= "w-10 text-white "  src={linkedin} alt="Linkedin"/>LinkedIn/cristian-e-aguirre</a>
    <a className="text-white font-mono   text-2xl  text-opacity-45 hover:text-slate-50" href='https://github.com/cristianmoto' target='_blank' >  <img  className= "w-10 text-white "  src={github} alt="Linkedin"/>github/cristianmoto</a>
    <a className="text-white font-mono   text-2xl  text-opacity-45 hover:text-slate-50" >  <img  className= "w-10 text-white "  src={mail} alt="Linkedin"/>DorianGraphic@gmail.com</a>
    <a className="text-white font-mono   text-2xl  text-opacity-45 hover:text-slate-50" href={cv} target='_blank'  >  <img  className= "w-10 text-white "  src={resume} alt="Linkedin "/>Curriculum </a>
</div>
  )
}
