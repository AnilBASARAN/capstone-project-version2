import Plant from "../models/plant.model.js";


 export   const getAllPlants = async ( req,res)=>{
        try{
            
            const plants = await Plant.find().sort({createdAt: -1})
            res.status(200).send(plants)
        }catch(error){
            console.error("Error fetching plants",error);
            res.status(500).send({message:"Failed to fetch plants"})
        }
    }

    export const getPlantById = async (req, res) => {
        const { plantId } = req.params; // Assuming 'plantId' is the name of the parameter in your route
        try {
            // Query by 'id', not '_id', since your custom unique field is 'id'
            const plant = await Plant.findOne({ id: plantId });
            if (!plant) {
                return res.status(404).send({ message: "Plant not found" });
            }
            res.status(200).send(plant);
        } catch (error) {
            console.error("Error fetching plant", error);
            res.status(500).send({ message: "Failed to fetch plant" });
        }
    };
    