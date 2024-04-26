


export const Projects = ({imagen, titulo, texto, refe}) => {
  return (
    <>
    
   
   <article className="relative cursor-pointer  h-[260px] w-[300px] container mx-auto my-[120px]  scale-90 bg-stone-800  opacity-40 rounded-md hover:opacity-100 hover:scale-100 hover:bg-amber-600 grayscale hover:grayscale-0  sm:h-[420px] sm:w-[800px]">
   
        <img  className="px-9 py-3" src={imagen} alt="Mundo Cafe" href={refe} />
    
    <div className=" justify-self-center">
        <h2 className="text-white  font-mono text-xl px-4 pb-3 sm:text-2xl sm:pb-4" >{titulo}</h2>
        <p  className="text-white  font-mono  text-sm px-4 sm:text-xl " >{texto}</p>
        <a href={refe} target="_blank"><button  className="absolute -bottom-3 w-[80px] h-10 justify-items-center  mx-[200px] shadow-stone-800  shadow-lg  bg-stone-300 rounded-lg font-mono  text-2xl  text-stone-6000  sm:w-[120px] "  >Visit</button></a>
    </div>
   
   </article>
   
   </>
  )
}
