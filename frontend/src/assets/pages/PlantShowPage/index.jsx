import { useEffect } from "react";
import NavBar from "shared-components/NavBar";
import { useParams } from "react-router-dom";
import LoadingSpinner from "shared-components/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";
import { useThemeStore } from "store/useThemeStore";
import { usePlantStore } from "store/usePlantStore";

const PlantShowPage = () => {
    const { theme } = useThemeStore();
    const { plantId } = useParams();
    const { selectedPlant, getPlantById, isPlantsLoading } = usePlantStore();

    useEffect(() => {
        if (plantId) {
            getPlantById(plantId);
        }
    }, [plantId, getPlantById]);

    console.log("plantId:", plantId);
    console.log("selectedPlant:", selectedPlant);

    return (
        <>
            <NavBar />
            <div data-theme={theme} className="flex justify-center min-h-screen">
                <div className="flex justify-center items-center w-full max-w-5xl md:w-full p-[175px] md:p-[50px]">
                    {isPlantsLoading ? (
                        <LoadingSpinner />
                    ) : selectedPlant ? (
                        <PlantInfoSection plant={selectedPlant} />
                    ) : (
                        <div className="text-center text-gray-500">
                            <p>Plant not found or an error occurred.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PlantShowPage;
