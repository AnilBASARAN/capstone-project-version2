import { useEffect } from "react";
import NavBar from "shared-components/NavBar";

import { useParams } from "react-router-dom";
import LoadingSpinner from "shared-components/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";
import { useThemeStore } from "store/useThemeStore";
import { usePlantStore } from "store/usePlantStore";

const PlantShowPage=()=>{
    const { theme } = useThemeStore();

    const {plantId} = useParams();
   

   
    const { plants,getPlantById,isLoading} = usePlantStore();


    useEffect(() => {
      
      getPlantById(plantId)
      
    }, [plantId,getPlantById]);
  
    console.log("plantId:",plantId)
    console.log("plant:",plants)

    return(
       <>
        <NavBar />
        <div data-theme={theme} className="flex justify-center min-h-screen">

        <div className="flex justify-center items-center w-full max-w-5xl md:w-full  p-[175px] md:p-[50px]">
            {isLoading ? <LoadingSpinner /> : < PlantInfoSection plant={plants} /> }
        </div>
        </div>
       </>
        
    );
};

export default PlantShowPage;