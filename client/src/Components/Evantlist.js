import axios from "axios"
import {useEffect, useState} from 'react'
import { BrowserRoute as Router, Link, useParams } from "react-router-dom";




function Show(){
  const [list, setList] = useState([])

  const {type} = useParams();

  useEffect(()=>{
    axios.get("http://localhost:8000/event/events").then((res)=> {

      const filter = (res.data.allEvents).filter(function(element){
        return type === element.eventType
      })
      setList(filter)
    })
    
    console.log(list)
  },[])
    return(
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center">Event List</h2>

    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

      {/* map all the events */}
      {list.map((all)=>
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src={`http://localhost:8000/${all.image}`} alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#"><Link to = {`/pricing/${all._id}`} >
                <span aria-hidden="true" className="absolute inset-0"></span>
                {all.eventName} 
                </Link>
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500"><i class="fas fa-map-marker-alt"></i>  {all.Address}</p>
            <p className="mt-1 text-sm text-gray-500"><i class="fas fa-stopwatch"></i>  {all.Time}</p>
            {/* <p className="mt-1 text-sm text-gray-500"><i class="fas fa-envelope-open-text"></i>  {all.Time}</p> */}

          </div>
          <p className="text-sm font-medium text-gray-900">$ {all.price}</p>
          {/* <p className="text-sm font-medium text-gray-900">Edit</p> */}
        </div>
        
      </div>
      )}

      {/* <!-- More products... --> */}
    </div>
  </div>
</div>
    )
}


export default Show