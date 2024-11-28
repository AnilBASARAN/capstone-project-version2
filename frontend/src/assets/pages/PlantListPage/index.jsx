import { useEffect,useState,useRef } from "react";
import NavBar from "shared-components/NavBar";
import * as plantService from "services/plant";
import PlantItem from "./PlantItem";
import LoadingSpinner from "shared-components/LoadingSpinner";
import clsx from "clsx";
import {motion} from "framer-motion"
import { useThemeStore } from "store/useThemeStore";
import { usePlantStore } from "store/usePlantStore";


const PlantListPage =()=> {
  const { theme } = useThemeStore();
    const footerRef = useRef(null);
    const navRef = useRef(null);

    const { plants,getPlants } = usePlantStore();


    useEffect(() => {
      getPlants();
    }, [getPlants]);
  
    
    const [,setPlants] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    console.log("plants:",plants)

    const [index, setIndex] = useState(0);
    const PAGE_SIZE = 9;
    const buttons = [];
    const buttonNumber = Math.ceil(plants.length/PAGE_SIZE);
   
    for(let i = 0; i<buttonNumber ; i++){
      buttons.push(
        <motion.div
        // this will make the paginating buttons slide from the right to left
        initial={{ translateX: "-100%" }} 
        animate={{ translateX: "100%"}} 
        transition={{ delay: 0.3 +  ( i ) * 0.2 ,  duration:0.4 }}
        >
                    <button
                     className={clsx("w-4 m-4 text-center p-2   ",index === i ? "text-2xl": "")}
                     onClick={()=>setIndex(i)}
                     key={i}  >{i+1}</button></motion.div>)
    }
  
  
    const paginatedPlants = plants
      .slice(index*PAGE_SIZE ,   PAGE_SIZE*(index+1) )
      .map((plant,idx) => (

        <motion.div 
        initial={{opacity:0,translateY:"20px"}}
        //so while in view means as ı scroll through my page the animation will trigger for those different divs
        viewport={{once:true}}
        whileInView={{opacity:1,translateY:0}}
        transition={{ delay: 0.3 +  ( idx % 3 ) * 0.2 ,  duration:0.4 }}
        key={plant.name}>
          <PlantItem  plant={plant} />
        </motion.div>

    ));
  




    useEffect(()=>{
       ( async()=>{
        setIsLoading(true);
        const response = await plantService.getPlants();
        const data = await response.json();
        setPlants(data);
        setIsLoading(false);
        
    })()
        plantService.getPlants()


    },[])
    

    return (
        <>
           <NavBar />
           <div data-theme={theme} className="min-h-screen flex flex-col items-center" >
        {
            !isLoading && 
            <button
                onClick={() => {
                    footerRef.current.scrollIntoView({
                      behavior:"smooth",
                      block:"center"
                    });
                  }}     
        ><i className="fa-solid text-xl md:text-2xl fa-angles-down m-4"></i></button>
        }
           {
            isLoading ?
            (<LoadingSpinner />)
             : 
             (<div className="flex justify-center items-center py-20" >
                <div className="w-full max-w-5xl">
                    <div ref={navRef} className="text-3xl font-fair  md:text-4xl  md:px-14">
                        Plants in stock
                    </div>

            <div
                className="flex justify-end p-8 w-full max-w-4xl " >{buttons}
            </div>
                    <div className="flex flex-wrap justify-center items-center">
                    { 
                        paginatedPlants
                    }
                    </div>
                    <footer ref={footerRef} className="h-1 bg-black"></footer>
                </div>
            </div>
            )
           }

          {
            !isLoading && 
            <button
            onClick={() => {
             navRef.current.scrollIntoView({
               behavior:"smooth",
               block:"center"
             });
           }} 
            ><i className="fa-solid text-xl md:text-2xl  fa-angles-up m-4"></i></button>
          }
           </div>
        </>
    );
};

export default PlantListPage;


