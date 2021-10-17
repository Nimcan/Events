


function slider(){
    return(
        <div className="flex flex-col items-center m-8">
        
  <div className="w-full bg-white rounded overflow-x-hidden flex snap-x h-80">
    <div className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative" id="slide-1">
    <img src="./images/n.jpg" className="h-full w-full object-cover absolute inset-0 z-10"/>
    </div>
    <div className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative" id="slide-2">
    <img src="./images/mux.jpg" className="h-full w-full object-cover absolute inset-0 z-10"/>
      
    </div>
    <div className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative" id="slide-3">
    <img src="./images/academic.jpg" className="h-full w-full object-cover absolute inset-0 z-10"/>
      
    </div>
    <div className="snap-start w-full h-full flex items-center justify-center text-black text-4xl font-bold flex-shrink-0 bg-black relative" id="slide-4">
    <img src="./images/netw.jpg" className="h-full w-full object-cover absolute inset-0 z-10"/>
      
    </div>
    <div className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative" id="slide-5">
    <img src="./images/t.jpg" className="h-full w-full object-cover absolute inset-0 z-10"/>
      
    </div>
    <div className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative" id="slide-6">
      <img src="./images/mm.jpg" className="h-full w-full object-cover absolute inset-0 z-10"/>
    </div>
  </div>

  <div className="flex mt-8">
    <a className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-1">1</a>
    <a className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-2">2</a>
    <a className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-3">3</a>
    <a className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-4">4</a>
    <a className="w-8 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-5">5</a>
    <a className="w-8 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-6">6</a>
  </div>
</div>

    )
}

export default slider