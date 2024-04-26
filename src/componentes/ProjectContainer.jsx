
import adidas from '../assets/imgPort/Adidas.png'
import cafem from '../assets/imgPort/cafem.png'
import mundoca from '../assets/imgPort/Mundoca.png'

import { Projects } from "./Projects";
const ProjectContainer = () => {
  return (
    <section className="flex container mx-auto">
      <Projects 
      imagen={mundoca} 
      titulo='Mundo Cafe' 
      texto= 'Página creada integramente en React con Tailwind'
      refe='https://mundo-cafe-msqh.vercel.app/'
       />
      <Projects 
      imagen={cafem} 
      titulo='Tienda Cafe' 
      texto= 'e-commerce creado con React y Boostrap'
      refe='https://cafeteriamartinez.vercel.app/'

      />
      <Projects 
      imagen={adidas} 
      titulo='Tienda Deportiva' 
      texto='Tienda adidas creada con Javascript y Boostrap' 
      refe='https://tiendaadidas.vercel.app/'
      />
    </section>
  );
};

export default ProjectContainer;
