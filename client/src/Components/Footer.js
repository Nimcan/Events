// import { BrowserRoute as Router, Link } from "react-router-dom";


function Footer(){
    return (
      <footer class="inset-0 flex justify-center px-4 text-gray-100 bg-gray-800 ">
          <div class="container flex flex-col items-center justify-between mt-6 md:flex-row">
              <div>
                  <a href="#" class="text-xl font-bold"><img src = "./images/event.png" className="h-20 w-auto"/></a>    
              </div>
              <div class="flex mt-4 md:m-0">
                  <div class="-mx-4">
                    <a href="#" class="px-4 text-sm">About</a>
                    <a href="#" class="px-4 text-sm">Blog</a>
                    <a href="#" class="px-4 text-sm">News</a>
                    <a href="#" class="px-4 text-sm">Contact</a>
                  </div>
              </div>
          </div>
  </footer>
    
    )
}


export default Footer