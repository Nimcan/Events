import { BrowserRoute as Router, Link } from "react-router-dom";






function Events(){
    return(
        <div className="" id = "event">
        <div  className="bg-white-200 ">

        <div  className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-3">

          <div  className="max-w-2xl mx-auto  lg:max-w-none">

            {/* <h2  className="text-3xl font-extrabold text-gray-900 text-center">Events</h2> */}
      
            <div  className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              <div  className="group relative">
               <Link to = {"/eventlist/religeous"}>
                <div  className="relative w-full h-60 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-50 lg:aspect-w-1 lg:aspect-h-1">
                  
                  <img src="./images/mux.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."  className="w-full h-full object-center object-cover" />
                 
                </div>
            
                <p  className="sm:py-3 text-center text-base font-semibold text-gray-900">Religeous Events</p>
            </Link>
           </div>
      
              <div  className="group relative">
                <Link to = {"/eventlist/tech"}>
                <div  className="relative w-full h-60 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-50 lg:aspect-w-1 lg:aspect-h-1">
                
                  <img src="./images/tech.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."  className="w-full h-full object-center object-cover"/>
                </div>
              
                <p  className="sm:py-3 text-center text-base font-semibold text-gray-900">Tech Events</p>
                </Link>
              </div>
      
              <div  className="group relative">
              <Link to = {"/eventlist/networking"}>
                <div  className="relative w-full h-60 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-50 lg:aspect-w-1 lg:aspect-h-1">
                  <img src="./images/nn.jpeg" alt="Collection of four insulated travel bottles on wooden shelf."  className="w-full h-full object-center object-cover" />
                </div>
                <p  className="sm:py-3 text-center text-base font-semibold text-gray-900">Networking Events</p>
                </Link>
                </div>
            </div>
          </div>
        </div>

         {/* Line-ka hoose */}

      <div  className="bg-white-100">
        <div  className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div  className="max-w-2xl mx-auto lg:max-w-none">
            <div  className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6">
              <div  className="group relative">
              <Link to = {"/eventlist/book-fair"}>
                <div  className="relative w-full h-60 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-50 lg:aspect-w-1 lg:aspect-h-1">
                  <img src="./images/academic.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."  className="w-full h-full object-center object-cover" />
                </div>
            
                <p  className="sm:py-3 text-center text-base font-semibold text-gray-900">Book Fair / Academic events</p>
                </Link>
                </div>
      
              <div  className="group relative">
              <Link to = {"/eventlist/party"}>
                <div  className="relative w-full h-60 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-50 lg:aspect-w-1 lg:aspect-h-1">
                  <img src="./images/party.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."  className="w-full h-full object-center object-cover"/>
                </div>
           
                <p  className="sm:py-3 text-center text-base font-semibold text-gray-900">Party Events</p>
                </Link>
              </div>
      
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>  
    )

    
}

export default Events