import {useEffect, useState} from 'react'

    function OrderForm(){
        const [toggle, setToggle] = useState(true)
        return(
            <>
            <div className = "mt-10">
            <table className="shopping-table">
                <tr>
                      <th>Event Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                 </tr>
                
                  <tr>
                       <td>asal</td>
                       <td>nice</td>
                       <td>$okay</td>
                       <td>$yes</td>
                 </tr>
                  <tr>
                        <td></td>
                        <td></td>
                       <td className="all-total">Total</td>
                       <td className="all-total">$ free</td>
                 </tr>
                 </table>
               
                 {toggle === true ? (
                 <button className="proceed-btn btn bg-green-500 p-2 rounded mb-10" onClick={()=> setToggle(!toggle)} >Proceed the sales</button>) :
                 (<button className="proceed-btn btn bg-red-600 p-2 rounded text-white" onClick={()=> setToggle(!toggle)} >Close</button> )}
                </div>
              
                <div>
                {toggle === false && form()}
                  
                </div>
                </>
        )

        function form(){
            return(
                <div class="font-sans py-10 ">
                    <div class="relative sm:max-w-sm w-full m-auto ">
                        <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                        <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label for="" class="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Personal Information Form
                            </label>
                            <form method="#" action="#" class="mt-10">
                                               
                                <div>
                                    <input type="email" placeholder="Enter First Name" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                </div>
                    
                                <div class="mt-7">                
                                    <input type="password" placeholder="Enter Last Name" class="mt-1 block w-full bg-gray-100 h-11 rounded shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                                </div>

                                <div class="mt-7">                
                                    <input type="password" placeholder="Enter Email" class="mt-1 block w-full bg-gray-100 h-11 rounded shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                                </div>

                                <div class="mt-7">                
                                    <input type="password" placeholder="Enter shipping Address" class="mt-1 block w-full bg-gray-100 h-11 rounded shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                                </div>

                                <div class="mt-7">                
                                    <input type="password" placeholder="Enter Phone" class="mt-1 block w-full bg-gray-100 h-11 rounded shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                                </div>
                       
                                <div class="mt-7">
                                    <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Make sales
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                
            </div>
            )

        }
    }

    export default OrderForm