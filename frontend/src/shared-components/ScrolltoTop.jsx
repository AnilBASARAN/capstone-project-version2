import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollToTop =()=> {

    const {pathname} =  useLocation();



    useEffect(()=>{
        window.scrollTo(0,0);

        // you could pass in amount of pixels to scroll, 
        //horizontally as well as vertically scrolling to the top zero, zero would be top left corner

        // so it will look for pathname variable to change, if someone goes to another page for example the pathname will change
        // if that happens its going to reset the scroll for my entire window


    },[pathname]);

    return null;
};
export default ScrollToTop;

// reset the window scroll whenever the route changes