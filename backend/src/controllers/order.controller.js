
import Order from "../models/order.model.js";

export   const getAllOrders = async ( req,res)=>{
    try{
        
        const orders = await Order.find().sort({createdAt: -1})
        res.status(200).send(orders)
    }catch(error){
        console.error("Error fetching orders",error);
        res.status(500).send({message:"Failed to fetch orders"})
    }
}

export const postAnOrder = async(req,res)=>{
try{
    const newOrder =  Order({...req.body});
    await newOrder.save();
    res.status(200).send({message: "Order posted successfully",order: newOrder})
}catch(error){
    console.error("Error creating order",error);
    res.status(500).send({message:"Failed to create new order"})
  }
};

export const getOrderByEmail = async(req,res)=>{
    try{
        const {email} = req.params;
        const orders = await Order.find({email}).sort({createdAt:-1})
        if(!orders){
            res.status(404).send({message: "Order not found"})
        }
        res.status(200).send(orders)
    }catch(error){
        console.error("Error fetching order",error);
        res.status(500).send({message: "Failed to fetch order"})
    }
}

