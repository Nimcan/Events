import {useState, useEffect} from 'react'
import axios from 'axios'






function Add(){

  const [event, setEvent] = useState({
    eventName:"",
    Address:"",
    eventType:"",
    price:"",
    Time:"",
    qty:0,
    image:""
  })

  console.log(event)

  function Save(e){
    e.preventDefault();
    const dataForm = new FormData()
    dataForm.append("eventName", event.eventName)
    dataForm.append("Address", event.Address)
    dataForm.append("eventType", event.eventType)
    dataForm.append("price", event.price)
    dataForm.append("Time", event.Time)
    dataForm.append("image", event.image)

    axios.post("http://localhost:8000/event/events", dataForm).then((res)=> console.log(res))
    console.log(dataForm)
  }
    return(
        <div className="mt-4 sm:mt-0  sm:py-6 sm:px-6 bg-gray-200">
          <h1 className="text-center font-bold mb-8 text-4xl">Add Event</h1>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Event Information</h3>
              <p className="mt-1 text-sm text-gray-600">
                Here you can add your event information.
              </p>
              <img className="mt-28" src="./images/form.svg"  />
            </div>
            {/* <h1>This is photo</h1> */}
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" encrypt="">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label for="first-name" className="block text-sm font-medium text-gray-700">Name Of Event</label>
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:py-2 border-gray-300 rounded-md" onChange = {(e)=> setEvent({...event, eventName:e.target.value})} />
                    </div>

                    {/* <div className="col-span-6 sm:col-span-3">
                      <label for="country" className="block text-sm font-medium text-gray-700">City</label>
                      <select id="country" name="country" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange = {(e)=> setEvent({...event, eventType:e.target.value})}>
                        <option>Hargaisa</option>
                        <option>Mogadisho</option>
                        <option>Jigjiga</option>
                        <option>Garowe</option>
                        <option>Djabouti</option>
                      </select>
                    </div> */}
      
                    <div className="col-span-6 sm:col-span-4">
                      <label for="email-address" className="block text-sm font-medium text-gray-700">Address </label>
                      <input type="text" name="email-address" id="email-address" autocomplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:py-2 border-gray-300 rounded-md"onChange = {(e)=> setEvent({...event, Address:e.target.value})}/>
                    </div>
      
                    <div className="col-span-6 sm:col-span-3">
                      <label for="country" className="block text-sm font-medium text-gray-700">Event Type</label>
                      <select id="country" name="country" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange = {(e)=> setEvent({...event, eventType:e.target.value})}>
                        <option>Tech events</option>
                        <option>Networking events</option>
                        <option>Religeous events</option>
                        <option>Academic / Book fair events</option>
                        <option>Party events</option>
                      </select>
                    </div>
      
                    <div className="col-span-6 sm:col-span-4">
                      <label for="street-address" className="block text-sm font-medium text-gray-700">Price</label>
                      <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:py-2 border-gray-300 rounded-md" onChange = {(e)=> setEvent({...event, price:e.target.value})}/>
                    </div>

                    
                    <div className="col-span-6 sm:col-span-4">
                      <label for="street-address" className="block text-sm font-medium text-gray-700">Card Quantity</label>
                      <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:py-2 border-gray-300 rounded-md" onChange = {(e)=> setEvent({...event, qty:e.target.value})}/>
                    </div>

                    
      
                    <div className="col-span-6 sm:col-span-4">
                      <label for="city" className="block text-sm font-medium text-gray-700">Time</label>
                      <input type="text" name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:py-2 border-gray-300 rounded-md" onChange = {(e)=> setEvent({...event, Time:e.target.value})}/>
                    </div>                    

                  </div>
                </div>

                {/* image */}
                
        <div className="bg-gray-50 px-5">
        <label className="block text-sm font-medium text-gray-700">
          Upload Event photo
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-400 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange = {(e)=> setEvent({...event, image:e.target.files[0]})}/>
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>

                {/* final imag */}
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={(e)=> Save(e)} >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}


export default Add