import {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { toast } from 'react-toastify'


function Order(){

  // event seat quantity
  const [quantity, setQuantity] = useState(0)
  

  const [seat, setSeat] = useState([])
console.log(seat)
  // order useEffect
  const [booking, setBooking] = useState({
    name:"",
    email:"",
    phone:"",
    seat:0
  })



  const {id} = useParams()
  useEffect(()=> {
  id !== undefined &&(
    axios.get(`http://localhost:8000/event/events/${id}`).then((res)=> setSeat(res.data.findEvent))
  )},[])


  function Book(e){
    e.preventDefault()
    seat.qty = quantity
    const form = {
      ...booking,
      order: seat,
      
    }
    axios.post("http://localhost:8000/order/orders", form).then((res)=> console.log(res))
    toast.success("Event is booked");
  }


    return(

     <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-gray-200" aria-hidden="true" />
      <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-indigo-900" aria-hidden="true" />

      <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 lg:pt-6">
        <h1 className="sr-only">Checkout</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-indigo-900 text-indigo-300 py-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2"
        >
          {/* {data.map((event)=>  */}
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>
          
            <dl>
              <dt className="text-sm font-medium">{seat.eventType}</dt>
              <dd className="mt-1 text-3xl font-extrabold text-white">{seat.eventName}</dd>
            </dl>

            <ul role="list" className="text-sm font-medium divide-y divide-white divide-opacity-10">
              
                <li className="flex items-start py-6 space-x-4">
                  <img
                    src={`http://localhost:8000/${seat.image}`}
                    alt="photo"
                    className="flex-none w-60 h-40 rounded-md object-center object-cover"/>
                  <div className="flex-auto space-y-1">
                    <h3 className="text-white">{seat.name}</h3>
                    {/* <p>color</p>
                    <p>size</p> */}
                  </div>
                </li>
            </ul>

            <dl className="text-sm font-medium space-y-6 border-t border-white border-opacity-10 pt-6">
              <div className="flex items-center gap-2 ">
                <dt><i class="fas fa-map-marker-alt text-2xl"></i></dt>
                <dd className = "text-2xl">  {seat.Address}</dd>
              </div>

              <div className="flex items-center gap-2 ">
                
                <dt><i class="fas fa-calendar-alt text-2xl"></i></dt>
                <dd className = "text-2xl">  {seat.date}</dd>
              </div>

              <div className="flex items-center gap-2 ">
                <dt><i class="fas fa-stopwatch text-2xl"></i> </dt>
                <dd className = "text-2xl">  {seat.Time} </dd>
              </div>

              <div className="flex items-center gap-3 ">
                <dt><i class="fas fa-dollar-sign text-2xl"></i></dt>
                <dd className ="text-2xl">{seat.price}</dd>
              </div>
            </dl>
            
          </div>
          {/* )} */}
        </section>

        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
        >
          <h2 id="payment-and-shipping-heading" className="sr-only">
            Payment and shipping detailss
          </h2>

          <form>
            <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
              <div>
                <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                  Booking information
                </h3>

                  {/* Attendees Name */}
                <div className="mt-6">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="name"
                      id="name-address"
                      name="name-address"
                      autoComplete="name"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                      onChange = {(e)=> setBooking({...booking, name:e.target.value})}
                    />
                  </div>
                </div>

                {/* Persons Email */}

                <div className="mt-6">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                      onChange = {(e)=> setBooking({...booking, email:e.target.value})}
                   />
                  </div>
                </div>

                {/* Phone number */}

                
                <div className="mt-6">
                  <label htmlFor="phone-address" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="phone"
                      id="phone-address"
                      name="phone-address"
                      autoComplete="phone"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                      onChange = {(e)=> setBooking({...booking, phone:e.target.value})}
                    />
                  </div>
                </div>

                {/* number of seats */}
                <div className="mt-6">
                  <label htmlFor="seat-address" className="block text-sm font-medium text-gray-700">
                    Number of seats
                  </label>
                  <div className="mt-1">
                    <div className="flex gap-2 content-center	pt-2">
                    <i class="fas fa-minus-square text-2xl pt-1"onClick = {(e)=> quantity > 0 && setQuantity(quantity-1)}></i>
                    <h4 className="text-2xl top-0">{quantity}</h4>
                    <i class="fas fa-plus-square text-2xl pt-1" onClick={(e)=>seat.qty > quantity && setQuantity(quantity+1)} ></i>
                </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-end pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  onClick = {(e)=> Book(e)}
                   >
                  Order
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  
    )
}


export default Order