
import { Link } from "react-router-dom";
import { useThemeStore } from "store/useThemeStore";
import { useAuthStore } from "store/useAuthStore";
import { useState } from "react";

const NavBar =()=>{
    const [userMenuOpen,setUserMenuOpen] = useState(false);
    const { authUser, logout } = useAuthStore();
    const { theme } = useThemeStore();
    return(
        <div data-theme={theme}>
         <nav
        
        className=" flex justify-center  font-lato pt-4">
            <div className="w-full max-w-5xl flex justify-between items-center px-8 py-2">

         <Link to="/plants">
         <div className="font-fair text-3xl md:text-2xl  flex flex-col items-center">

         
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
                {authUser.username}</button>
                {
                    userMenuOpen && <div className="absolute bottom-[-33px] rounded-md shadow-md left-0 mt-20 " >
                        <button
                        onClick={logout}
                        className="p-1">
                            <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                            sign out
                        </button>
                        </div>
                }
                </div>
                <button
                
                className=" flex items-center ml-4 text-sm md:text-xl">
                <i className="fa-solid fa-cart-shopping mr-2 "></i>
                cart
                </button>
               
            </div>

            <button
                    
                    className="flex md:hidden ">
           <i className="fa-solid text-4xl fa-bars"></i>
           </button>


           </div>
        </nav>
    
      
        </div>
       
    );
};

export default NavBar;