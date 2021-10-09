


function Header(){
    return (
        <div >
     
      {/* The Resposive Header */}

  <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
  
    <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

    <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">

      {/* the button that closes menu in the Resposive  */}
      
      <div className="px-4 pt-5 pb-2 flex">
        <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400">
          <span className="sr-only">Close menu</span>

          {/* <!-- Heroicon name: outline/x --> */}

          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* <!-- Links --> */}

      <div className="mt-2">
        <div className="border-b border-gray-200">
          <div className="-mb-px block px-4 " aria-orientation="horizontal" role="tablist">

            <button id="tabs-1-tab-1" className="text-gray-900 border-transparent block whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">
              Home
            </button>

            <button id="tabs-1-tab-2" className="text-gray-900 border-transparent block whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">
              About
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-4 space-y-6">
        <div className="flow-root">
          <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Events</a>
        </div>

        <div className="flow-root">
          <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Testomonial</a>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-4 space-y-6">
        <div className="flow-root">
          <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
        </div>
        <div className="flow-root">
          <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Create account</a>
        </div>
      </div>
    </div>
  </div>

  
      {/* Normal Header */}
  <header className="relative bg-white">
  

    <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="h-16 flex items-center">
          {/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. --> */}
          <button type="button" className="bg-white p-2 rounded-md text-gray-400 lg:hidden">
            <span className="sr-only">Open menu</span>
            {/* <!-- Heroicon name: outline/menu --> */}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* <!-- Logo --> */}
          
          <div className="ml-4 flex lg:ml-0">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img className="h-12 w-auto" src="./images/event.png" alt=""/>
            </a>
          </div>

          {/* <!-- Flyout menus --> */}
          
          <div className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="h-full flex space-x-8">
              <div className="flex">
                <div className="relative flex">
                  {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                  <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                    Home
                  </button>
                </div>

              
                <div className="absolute top-full inset-x-0 text-sm text-gray-500">
                  {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                  <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                  
                </div>
              </div>

              <div className="flex">
                <div className="relative flex">
                  {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                  <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                    About
                  </button>
                </div>                
              </div>

              <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Events</a>

              <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Testomonial</a>
            </div>
          </div>

          <div className="ml-auto flex items-center">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
              <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
            </div>

          

            {/* <!-- Search button --> */}
            <div className="flex lg:ml-6">
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                {/* <!-- Heroicon name: outline/search --> */}
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>

            {/* <!-- Cart --> */}
            <div className="ml-4 flow-root lg:ml-6">
              <a href="#" className="group -m-2 p-2 flex items-center">

                {/* <!-- Heroicon name: outline/shopping-bag --> */}

                <svg className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>
    )
}


export default Header