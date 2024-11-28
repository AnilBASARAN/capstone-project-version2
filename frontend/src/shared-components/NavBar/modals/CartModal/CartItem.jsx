/* eslint-disable react/prop-types */
import * as cartService from "services/cart"

const CartItem =(props)=>{
    const {item,fetchCart} = props;

    return(
       
      
        <div className="flex justify-center shadow-md m-2 p-1 text-sm relative  text-green-900" >
            <button
                onClick={async()=>{
                await cartService.removeItemFromCart({itemId:item.id});
                fetchCart();
             }}
             className="absolute top-0 right-0">
            <i className=" text-xl text-slate-400  fa-regular fa-circle-xmark hover:text-black"></i>
            </button>

           <div className="containerLeft mr-2" >
          <img src={item.image_src} className="w-24 h-24 object-cover rounded-lg" />
           </div>

           <div className="containerRight flex justify-between m-1" >

            <div className="containerRightLeft flex-1 justify-between   flex flex-col mr-2 w-[190px] ">
            <div className="text-lg text-green-600">
              
                {item.plant_name}
                </div>
            <div className="flex text-slate-500">
            <div className="w-10"> qty:</div>
                {item.quantity}
                </div>
                <div className="flex text-slate-500">
                    <div className="w-10" >color:</div>
                {item.pot_color}
                </div>
            </div>

            <div className="containerRightRight w-[50px]  flex justify-end items-end">
               
            <div className="flex flex-col justify-between ">
            <button
                    onClick={async()=>{
                       await cartService.removeItemFromCart({itemId:item.id});
                       fetchCart();
                    }}
             className="hidden text-sm mb-3 text-slate-400 hover:text-red-800" ><i className="fa-regular fa-trash"></i></button>
            <div className="totalPrice  text-slate-800">${item.price_per_unit*item.quantity}</div>
            </div>
             
            </div>

           </div>
        </div>
    );
};

export default CartItem;
