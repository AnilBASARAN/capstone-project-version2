import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const POT_COLORS = {
    stone: "bg-stone-200",
    slate: "bg-slate-300",
    sky: "bg-sky-700",
    black: "bg-gray-600",
    white: "bg-gray-50",
    amber: "bg-amber-600",
  };

  const getRandomIndex =(array)=>{
    return Math.floor(Math.random()*array.length);
  }

const PlantItem =(props)=> {
    const {plant} = props;
    
    const[imageIndex,setImageIndex] = useState(()=> getRandomIndex(plant.images));
    const [active,setActive] = useState(imageIndex);

    return(
        <div className="mx-5 my-8">
            <Link to={`/plants/${plant.id}`} >
            
            <img className="w-[280px] h-[320px] rounded-md object-cover " src={plant.images[imageIndex].src} />
            </Link>
            <div className="flex justify-between my-3">
                <div className="text-xl font-fair ">{plant.name}</div>
                <div className="text-lg ">${plant.price}</div>
            </div>
            <div className="flex justify-between" >
                <div className="text-sm text-slate-500" >{plant.images[imageIndex].pot_color}{" "}color </div>
                <div className="flex" >
                    {
                        plant.images
                        .map((image,index)=><img
                                               src={plant.images[index].src}
                                                onMouseMove={()=>{
                                                    setImageIndex(index);
                                                    setActive(index);
                                                }}
                                                key={index} 
                                                className={clsx("rounded-md  mx-[3px] ",POT_COLORS[image.pot_color] , index === active ? "outline w-[45px] h-[45px] outline-slate-300 outline-offset-2" : "w-[30px] h-[30px]" )} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default PlantItem;