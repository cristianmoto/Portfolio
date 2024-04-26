import logo from '../assets/logo_ca.svg'


export const Header = () => {
  return (
    <header className="  flex-none  sm:flex ">
    <div>
    <img className=" w-[300px] px-4 sm:px-0 sm:w-[400px]"  src={logo}  alt="logo " />
    </div>
     
   </header>
  )
}
