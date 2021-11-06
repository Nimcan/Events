import axios  from "axios"
import {useState, useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'


function Pricing(){
  // all event data
  const [data, setData] = useState([])

  const {id} = useParams();

  useEffect(()=>{
    id !== undefined && (
    axios.get(`http://localhost:8000/event/events/${id}`).then((res)=> setData(res.data.findEvent)))
  },[])

    return(
        <section class="text-gray-600 body-font overflow-hidden mb-4 mt-2">
  <div class="container px-5 py-6 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src= {`http://localhost:8000/${data.image}`}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{data.eventType}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{data.eventName}</h1>
        <div class="flex mb-4">            
        </div>
        <p class="leading-relaxed"><i class="fas fa-map-marker-alt"></i>  {data.Address}<br></br>
        <i class="fas fa-stopwatch"></i> {data.Time} <br></br>
        <i class="fas fa-calendar-alt"></i> {data.date}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3">Quantity :-</span> 
            <h1><span className="font-bold ">{data.qty} </span>"Seats/ Tickets"</h1>
          </div>
          {data.qty === 0 && <h1 className = "text-center ml-10 text-red-500">"We are so sorry all cards and seats are Ordered"</h1>}
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">${data.price}</span>
          {data.qty === 0 ? data.price != "free" :
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" ><Link to = {`/checkout/${id}`}>Book</Link></button>}
         
        </div>
      </div>
    </div>
  </div>
</section>

    )
}



export default Pricing