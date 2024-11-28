import  {useContext, useState} from "react";
import SessionContext from "contexts/SessionContext";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";
import ModalWrapper from "./modals/ModalWrapper";
import MobileMenuModal from "./modals/MobileMenuModal";
import { useThemeStore } from "store/useThemeStore";

const NavBar =()=>{
    const [userMenuOpen,setUserMenuOpen] = useState(false);
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
    const { username,signOut } = useContext(SessionContext);
    const { theme } = useThemeStore();
    return(
        <div data-theme={theme}>
         <nav
        onMouseLeave={()=>setUserMenuOpen(false)}
        className=" flex justify-center  font-lato pt-4">
            <div className="w-full max-w-5xl flex justify-between items-center px-8 py-2">

         <Link to="/plants">
         <div className="font-fair text-3xl md:text-2xl  flex flex-col items-center">

            {
                false &&
        <img src="https://static-task-assets.react-formula.com/capstone_logo_light.png" className="w-10" />
            }
           House Plants
            </div>
         </Link>


         <div className="px-4">
         <Link to="/settings">
         <div className="font-fair text-3xl md:text-2xl  flex flex-col items-center">

           
            Settings
            </div>
         </Link>
         </div>


            <div className="  flex-1 items-center  justify-end hidden md:flex">
                <div className="relative min-w-32  ">

            <button
            onClick={()=>setUserMenuOpen(true)}
            className=" flex items-center text-sm md:text-xl ml-1">
                <i className="fa-solid fa-user text-sm md:text-xl mr-2"></i>
                {username}</button>
                {
                    userMenuOpen && <div className="absolute bottom-[-33px] rounded-md shadow-md left-0 mt-20 " >
                        <button
                        onClick={signOut}
                        className="p-1">
                            <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                            sign out
                        </button>
                        </div>
                }
                </div>
                <button
                onClick={()=>setIsCartOpen(true)}
                className=" flex items-center ml-4 text-sm md:text-xl">
                <i className="fa-solid fa-cart-shopping mr-2 "></i>
                cart
                </button>
               
            </div>

            <button
                    onClick={()=>setIsMobileMenuOpen(true)}    
                    className="flex md:hidden ">
           <i className="fa-solid text-4xl fa-bars"></i>
           </button>


           </div>
        </nav>
    
            <ModalWrapper isOpen={isCartOpen} onCloseClick={()=>setIsCartOpen(false)} >
                <CartModal setIsCartOpen={setIsCartOpen} />
            </ModalWrapper>

            <ModalWrapper isOpen={isMobileMenuOpen} onCloseClick={()=>setIsMobileMenuOpen(false)} >
                <MobileMenuModal onCartOpenClick={()=>{
                        setIsCartOpen(true);
                        setIsMobileMenuOpen(false);
                }} />
            </ModalWrapper>
      
        </div>
       
    );
};

export default NavBar;