/* eslint-disable react/prop-types */
import { RemoveScroll } from "react-remove-scroll";
import { useRef } from "react";

const ModalWrapper =(props)=> {

    const {children,isOpen,onCloseClick} = props;
    const backgroundDivRef = useRef();

// instead of conditional rendering we can do it this way also

    if(isOpen == false){
        return null;
    }

    return(
        <RemoveScroll>

        <div
            onClick={(e)=>{
                if(e.target === backgroundDivRef.current){
                    onCloseClick();
                }
            }}
            ref={backgroundDivRef}
            //z-20 to fix the on top when the modal and waving effect clashes 
        className=" z-20 fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex items-start justify-end font-lato" >
        
       <button
            onClick={onCloseClick}
             className=' fixed top-2 right-2 '>
        
         <i className=" text-3xl text-emerald-500  hover:text-emerald-600   fa-regular fa-circle-xmark"></i>
        </button>
        {children}
        </div>
       
        </RemoveScroll>
    );
};

export default ModalWrapper;