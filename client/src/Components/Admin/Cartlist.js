import {useEffect, useState} from 'react'
import axios from 'axios'


function Cart(){

  const [data, setData] = useState([])
  console.log(data)

  useEffect(()=>{
    axios.get("http://localhost:8000/order/orders").then((res)=> setData(res.data.guests))
  },[])


  // delete function

  function Delete(id){
    axios.delete(`http://localhost:8000/order/orders/${id}`).then((res)=> console.log(res))
  }

  function Fullfilled(id){
    console.log(id)

    axios.put(`http://localhost:8000/order/orders/fullfilled/${id}`).then((res)=> console.log(res))
}


    return(

      <div className="mt-5 mb-10 ml-5">
        
        
        <h2 className="text-center text-2xl mb-2">Guests list </h2>
      <table className="max-w-5xl mx-auto table-auto ">
        <thead className="justify-between ">
          <tr className="bg-green-600 ">
            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">Name</span>
            </th>
            <th className="px-10 py-2">
              <span className="text-gray-100 font-semibold">Event</span>
            </th>
          
            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">Email</span>
            </th>

            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">phone</span>
            </th>

            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">Tickets</span>
            </th>
            

            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">Setting</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {data.map((order)=>
          
          <tr className="bg-white border-b-2 border-gray-200">
            <td className="px-10 py-2">
            <span className=" font-semibold ">{order.name}</span>
            </td>
            <td>
              <span className="text-center">{order.order[0].eventName}</span>
            </td>
           
            <td className="px-10 py-2">
              <span>{order.email}</span>
            </td>
           
            <td className="px-10 py-2 text-center">
              <span>{order.phone}</span>
            </td>

            <td className="px-10 py-2 text-center	">
              <span>{order.order[0].qty}</span>
            </td>

            <td className="px-10 py-2 ">
              <span className="text-yellow-500 flex gap-3 justify-center ">
              <input type="checkbox" className="h-5 w-4" onClick = {()=> Fullfilled(order._id)}/>
                 <svg                           onClick = {()=> Delete(order._id)}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-red-700"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
              </span>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>

    )
}


export default Cart