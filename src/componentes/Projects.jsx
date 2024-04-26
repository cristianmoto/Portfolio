


export const Projects = ({imagen, titulo, texto, refe}) => {
  return (
    <>
    
   
   <article className="relative cursor-pointer  h-[420px] w-[800px] container mx-auto my-[120px]  scale-90 bg-stone-800  opacity-40 rounded-md hover:opacity-100 hover:scale-100 hover:bg-amber-600 grayscale hover:grayscale-0 ">
   
        <img  className="px-9 py-3" src={imagen} alt="Mundo Cafe" href={refe} />
    
    <div className=" justify-self-center">
        <h2 className="text-white  font-mono text-2xl px-4 pb-3 " >{titulo}</h2>
        <p  className="text-white  font-mono text-xl px-4 " >{texto}</p>
        <a href={refe} target="_blank"><button  className="absolute -bottom-3 w-[120px] h-10 justify-items-center  mx-[200px] shadow-stone-800  shadow-lg  bg-stone-300 rounded-lg font-mono  text-2xl  text-stone-6000  "  >Visit</button></a>
    </div>
   
   </article>
   
   </>
  )
}
