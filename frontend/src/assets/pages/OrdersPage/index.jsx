/* import React from 'react'
import  { useEffect } from 'react'
import { useAuthStore } from 'store/useAuthStore';
import { useOrderStore } from 'store/useOrderStore';

const OrdersPage = () => {
    const { selectedOrder,getOrderByEmail} = useOrderStore();
    const { authUser} = useAuthStore();


    useEffect(() => {
        
        getOrderByEmail("nlbsrn@gmail.com")
        
        
      
    }, [getOrderByEmail]);

console.log("user:",authUser);
console.log("orders:",selectedOrder)

  return (
    <div>OrdersPage</div>
  )
}

///////

export default OrdersPage

 */

import React, { useEffect } from 'react'
import { useOrderStore } from 'store/useOrderStore';


const OrderPage = () => {
    const { orders,getOrders} = useOrderStore();
  


    useEffect(() => {
        
        getOrders()
        
        
      
    }, [getOrders]);


console.log("orders:",orders)




    //if (true) return <div>Loading...</div>
   // if (isError) return <div>Error geting orders data</div>


    return (
        <div className='container mx-auto p-6'>
            <h2 className='text-2xl font-semibold mb-4'>Your Orders</h2>
            {
                orders.length === 0 ? (<div>No orders found!</div>) : (<div>
                    {
                        orders.map((order, index) => (
                            <div key={order._id} className="my-12 p-6 rounded-md border-b bg-slate-300 mb-4 pb-4 flex flex-col items-start w-[100%] sm:w-[70%] md:[60%] ">
                              <div>
                                
                              </div>

                                <div className="p-1 bg-secondary"   >
                                <p className=' text-white w-10 rounded mb-1'># {index + 1}</p>
                                </div>

                                <h2 className="font-bold">Order ID: {order?._id}</h2>
                                <p className="text-gray-600">Name: {order?.name}</p>
                                <p className="text-gray-600">Email: {order?.email}</p>
                                <p className="text-gray-600">Phone: {order?.phone}</p>
                                <p className="text-gray-600">Total Price: ${order.totalPrice}</p>
                                <h3 className="font-semibold mt-2">Address:</h3>
                                <p> {order.adress.city}, {order.adress.state}, {order?.adress?.country}, {order.adress.zipcode}</p>
                                <h3 className="font-semibold mt-2">Products Id:</h3>
                                <ul>
                                    {order.productIds.map((productId) => (
                                        <li key={productId}>{productId}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>)
            }
        </div>
    )
}

export default OrderPage



