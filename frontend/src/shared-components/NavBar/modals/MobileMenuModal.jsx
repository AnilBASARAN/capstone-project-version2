/* eslint-disable react/prop-types */
import SessionContext from "contexts/SessionContext";
import { useContext } from "react";
import {motion} from "framer-motion"

const MobileMenuModal =(props)=> {

    const {onCartOpenClick} = props
    const { username,signOut } = useContext(SessionContext);

    

    return(
        <motion.div 
        initial={{ translateY: "-100%" }} 
        animate={{ translateY: 0}} 
        transition={{ duration: 0.5 }}
        
        className=" flex flex-col text-xl items-start bg-emerald-800 shadow-md pt12-2 pr-12 pb-6 rounded-bl-md text-white ">

            <div className="px-8 py-4">
                <i className="fa-solid fa-user text-2xl mr-2"></i>
                {username}
            </div>


                
                    <button
                            onClick={signOut}
                    className="px-8 py-4">
                    <i className="text-2xl mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                    sign out
                    </button>
               

               
                    <button
                            onClick={onCartOpenClick}
                     className="px-8 py-4">
                    <i className="fa-solid fa-cart-shopping text-2xl mr-2 "></i>
                    cart
                    </button>
               
        </motion.div>
    );
};

export default MobileMenuModal;