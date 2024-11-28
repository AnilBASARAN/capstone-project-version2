import { useEffect,useState } from "react";
import NavBar from "shared-components/NavBar";
import * as plantService from "services/plant";
import { useParams } from "react-router-dom";
import LoadingSpinner from "shared-components/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";
import { useThemeStore } from "store/useThemeStore";

const PlantShowPage=()=>{
    const { theme } = useThemeStore();
    const [plants,setPlants] = useState(null);
    const {plantId} = useParams();
    const [isLoading,setIsLoading] =useState(true);

   
    useEffect(()=>{
        (async()=>{
        
        const response = await plantService.getPlantById({id:plantId});
        const data =  await response.json();
        setPlants(data);
        setIsLoading(false);

        })()
    },[plantId])

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