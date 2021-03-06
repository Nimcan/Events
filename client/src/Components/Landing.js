
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Reveal from 'react-reveal/Reveal';

function Landing(){
    return(
        <div className="relative bg-gray-100 overflow-hidden">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
      <div className="sm:max-w-lg">
        <Fade left>
        <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Get your ticket or your seat for any event from here :(
        </h1>
        </Fade>
        <Slide left>
        <p className="mt-4 text-xl text-gray-500">Here you can find any event that will happening in somali region, whether it is a Tech, Networking or Academic events .</p>
        </Slide>
      </div>
      <div>
        <div className="mt-10">
          {/* <!-- Decorative image grid --> */}
          <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-6xl lg:mx-auto lg:w-full">
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                    <Slide up>
                      <img src="./images/academic.jpg" alt="" className="w-full h-full object-center object-cover"/>
                    </Slide>
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Slide up>
                    <img src="./images/party.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </Slide>
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Slide up>
                    <img src="./images/Book.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </Slide>
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img src="./images/3.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img src="./images/london-tech-week.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img src="./images/Muxaadaro.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img src="./images/mux.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href = "#" className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700" >Get your seat</a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}


export default Landing