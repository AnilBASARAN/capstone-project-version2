/* eslint-disable react/prop-types */

import { useCallback, useContext ,useEffect, useState} from 'react';
import SessionContext from 'contexts/SessionContext';
import * as cartService from "services/cart"
import LoadingSpinner from 'shared-components/LoadingSpinner';
import CartItem from './CartItem';
import {motion} from "framer-motion"

const CartModal = ()=>{

    
    
    const [items,setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[isDeleting,setIsDeleting] = useState(false);
    const userName = useContext(SessionContext).username;

    const joke = useContext(SessionContext).joking.joke;
    const setJoke = useContext(SessionContext).joking.setJoke;


    const fetchCart = useCallback(async () => {
        setIsLoading(true);
        const response =  await cartService.getCart();
        const data = await response.json();
        setItems(data);
        setIsLoading(false);
    },[])

    useEffect(()=>{
       fetchCart();
    },[fetchCart]);

console.log("cart:",items)

    const priceArray = items.map((x,i)=>x = x.price_per_unit*x.quantity);

    const sum = priceArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
 
      const totalQuantity = items.map((x,i)=> x=x.quantity).reduce((acc, curr) => acc + curr, 0);


    return(
     
            <motion.div
          /*   initial={{ translateX: "100" }} 
            animate={{ translateX: "%50"}} 
            transition={{ duration: 5 }} */
             className= 'flex flex-col bg-white h-screen w-full max-w-sm' >
                <div className='bg-emerald-800 text-white font-fair text-center py-7 shadow-md text-3xl '>
                    {userName}&apos;s Cart
                </div>
                {
                    isLoading && <LoadingSpinner /> 
                }
                <div className='flex-1 overflow-y-scroll p-2'>

                {
                    !isLoading &&
                     
                    items.map(item => <CartItem deletion={[isDeleting,setIsDeleting]} fetchCart={fetchCart} item={item} key={item.id} />)
                }

               {
                !isLoading &&
                <>
                 <div className='flex-1 flex flex-col  p-2 rounded-lg shadow-md'>

                    <div className='flex-1 flex m-2 p-2 items-center'>
                            <button
                                    className='bg-emerald-700 font-fair text-lg flex-1 rounded-full  py-3 text-white text-center'
                                    onClick={()=>{
                                        setJoke(joke+1)
                                        if(joke<2){
                                            console.log("joke count:",joke)
                                            
                                            alert("Are you REALLY gonna give your credit card info? :D\nDON'T DO IT");


                                            
                                        }else if(joke<3){
                                            alert("Last chance :D DON'T DO IT")
                                        }
                                         else{
                                            console.log("enough with the jokes");
                                        }
                                    }
                                }
                                    
                                        

                                    
                         >Checkout <i className='ml-4 text-xl fa-regular fa-arrow-right-to-line'></i> </button>
                        </div>


                        <div className='border-t border-green-800 upper flex justify-between text-stone-600 font-fair'>

                        <div className='left'>

                        <div>{totalQuantity} items</div>
                        </div>
                        <div className='righty'>

                        <div>total {sum}</div>
                        </div>
                        </div>

    
                    </div>
                </>
               }
                
                </div>
            </motion.div>
          
    );
};

export default CartModal;