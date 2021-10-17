import { BrowserRoute as Router, Link } from "react-router-dom";






function Events(){
    return(
        <div className="lg:py-20 py-4">
        <div  className="bg-gray-200 ">

        <div  className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-3">

          <div  className="max-w-2xl mx-auto  lg:max-w-none">

            <h2  className="text-4xl font-extrabold text-gray-900 text-center">Collections</h2>
      
            <div  className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              <div  className="group relative">
               
                <div  className="relative w-full h-60 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-50 lg:aspect-w-1 lg:aspect-h-1">
                  <Link to = {"/eventlist"}>
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."  className="w-full h-full object-center object-cover" />
                  </Link>
                </div>
            
                <p  className="sm:py-3 text-center text-base font-semibold text-gray-900"><Link to = {"/eventlist"}>Religeous Events </Link></p>
              </div>
      
              <div  className="group relative">
                <div  className="relative w-full h-60 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-50 lg:aspect-w-1 lg:aspect-h-1">
                <Link to = {"/eventlist"}>
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."  className="w-full h-full object-center object-cover"/>
                </Link>
                </div>
              
                <p  className="sm:py-3 text-center text-base font-semibold text-gray-900"><Link to = {"/eventlist"}>Tech Events </Link></p>
              </div>
      
              <div  className="group relative">
                <div  className="relative w-full h-60 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-50 lg:aspect-w-1 lg:aspect-h-1">
                <Link to = {"/eventlist"}>
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf."  className="w-full h-full object-center object-cover" />
                </Link>
                </div>
                <p  className="sm:py-3 text-center text-base font-semibold text-gray-900"> <Link to = {"/eventlist"}>Networking Events </Link></p>
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
                <div  className="relative w-full h-60 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-50 lg:aspect-w-1 lg:aspect-h-1">
                <Link to = {"/eventlist"}>
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."  className="w-full h-full object-center object-cover" />
                </Link>
                </div>
            
                <p  className="sm:py-3 text-center text-base font-semibold text-gray-900"><Link to = {"/eventlist"}>Book Fair / Academic events </Link></p>
              </div>
      
              <div  className="group relative">
                <div  className="relative w-full h-60 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-50 lg:aspect-w-1 lg:aspect-h-1">
                <Link to = {"/eventlist"}>
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."  className="w-full h-full object-center object-cover"/>
                </Link>
                </div>
           
                <p  className="sm:py-3 text-center text-base font-semibold text-gray-900"><Link to = {"/eventlist"}>Party Events</Link></p>
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