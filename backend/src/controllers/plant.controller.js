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