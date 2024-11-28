import clsx from "clsx";
import { useState } from "react";
import * as cartService from "services/cart"


const POT_COLORS = {
    stone: "bg-stone-200",
    slate: "bg-slate-300",
    sky: "bg-sky-700",
    black: "bg-gray-600",
    white: "bg-gray-50",
    amber: "bg-amber-600",
  };

const PlantPurchaseOptions=(props)=>{

    const {plant,active,setActive} = props;
    
    const [quantity,setQuantity] = useState(1);
    const[imageIndex,setImageIndex] = useState(active);
    const [isLoading,setIsLoading] = useState(false);

    return(
        <div className="m-4">
        
        <div className="my-5  flex">
            <i className="fa-solid fa-brush text-xl mr-2 "></i>
            <div className="min-w-[80px]">Pot Colors</div>
            <div className="flex min-w-20" >
                    {
                        plant.images
                        .map((image,index)=><div key={image.pot_color} className="flex flex-col items-center m-1 text-xl "><div  
                                                onMouseMove={()=>{
                                                    setImageIndex(index);
                                                    setActive(index);
                                                }}
                                                key={index} 
                                                className={clsx("rounded-full  mx-[3px] w-5 h-5",POT_COLORS[image.pot_color] , index === active ? "outline  outline-slate-300 outline-offset-2 text-stone-500" : "text-stone-800" )}></div><div className={clsx("mt-1", index === active ?"text-black":"text-slate-400")}>{image.pot_color}</div></div>)
                    }
                </div>
        </div>
        
        <div className="flex" >
                    <div className="rounded-full flex items-center text-xl text-slate-500 border border-slate-300 px-3 py-4" >
                   <button
                        onClick={()=>{
                          if (quantity > 1)  setQuantity((quantity)=>quantity-1)
                        }}
                   >

                    <i className="fa-solid fa-minus"></i>
                   </button>
                    <div className="mx-4 text-2xl " >

                    {quantity}
                    </div>
                    <button
                        className="m-1"
                        onClick={()=>setQuantity((quantity)=>quantity+1)}
                    >

                    <i className="fa-solid fa-plus"></i>
                    </button>
                    </div>
                    <button
                    onClick={async()=>{
                        setIsLoading(true);
                        const response = await cartService.addPLantToCart({
                            quantity:quantity,
                            plantId:plant.id,
                            potColor:plant.images[imageIndex].pot_color
                        });
                        const data = await response.json();
                        console.log(data);
                        setIsLoading(false);
                        
                    }} 
                    className=" flex flex-1 rounded-full ml-3 bg-emerald-700 hover:bg-emerald-900 text-white text-xl  justify-center items-center" >
                    <i className="fa-solid fa-cart-plus 2xl"></i>
                    <div className="flex justify-between items-center pl-2">
                        
                        <div className="pl-2 mr-2">
                        add to cart
                        </div>
                        {
                            isLoading ?
                            (<div className="w-1">

                                <i className="text-3xl fa-spin  fa-solid fa-spinner"></i>
                            </div>) :
                            (<div className="w-1"></div>)
                        
                             } </div>
                            
                    </button>
        </div>
        </div>
    );
};

export default PlantPurchaseOptions;