


function cart(){
    return(

        <section class="text-blueGray-600 ">
        <div class="container px-5 py-24 mx-auto">
          <div class="w-full mx-auto overflow-auto lg:w-2/3">
            <table class="w-full text-left whitespace-no-wrap table-auto">
              <thead>
                <tr>
                  <th class="px-4 py-2 text-sm font-medium tracking-widest text-blueGray-500 title-font"> One</th>
                  <th class="px-4 py-2 text-sm font-medium tracking-widest text-blueGray-500 title-font"> Two</th>
                  <th class="px-4 py-2 text-sm font-medium tracking-widest text-blueGray-500 title-font"> Three</th>
                  <th class="px-4 py-2 text-sm font-medium tracking-widest text-blueGray-500 title-font"> Four</th>
                </tr>
              </thead>
              <tbody>
                <tr class="items-center">
                  <td class="px-4 py-2 text-black bg-blueGray-50">Row</td>
                  <td class="px-4 py-2 text-black bg-blueGray-50">00 Mb/s</td>
                  <td class="px-4 py-2 text-black bg-blueGray-50">00 GB</td>
                  <td class="px-4 py-2 text-lg bg-blueGray-50">
                    <button role="button" class="px-4 py-2 mx-auto text-base font-medium text-blue-600 transition duration-500 ease-in-out transform bg-blue-100 rounded-lg hover:bg-blue-300 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Buy Now </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border-t-2 border-blueGray-200 ">Row</td>
                  <td class="px-4 py-2 border-t-2 border-blueGray-200">00 Mb/s</td>
                  <td class="px-4 py-2 border-t-2 border-blueGray-200">00 GB</td>
                  <td class="px-4 py-2 text-lg text-blueGray-900 border-t-2 border-blueGray-200">
                    <button role="button" class="px-4 py-2 mx-auto text-base font-medium text-blue-600 transition duration-500 ease-in-out transform bg-blue-100 rounded-lg hover:bg-blue-300 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Buy Now </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-2 text-black border-t-2 border-blueGray-200 bg-blueGray-50">Row</td>
                  <td class="px-4 py-2 text-black border-t-2 border-blueGray-200">00 Mb/s</td>
                  <td class="px-4 py-2 text-black border-t-2 border-blueGray-200 bg-blueGray-50">00 GB</td>
                  <td class="px-4 py-2 text-lg border-t-2 border-blueGray-200 bg-blueGray-50">
                    <button role="button" class="px-4 py-2 mx-auto text-base font-medium text-blue-600 transition duration-500 ease-in-out transform bg-blue-100 rounded-lg hover:bg-blue-300 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Buy Now </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border-t-2 border-b-2 border-blueGray-200">Row</td>
                  <td class="px-4 py-2 border-t-2 border-b-2 border-blueGray-200">48 Mb/s</td>
                  <td class="px-4 py-2 border-t-2 border-b-2 border-blueGray-200">120 GB</td>
                  <td class="px-4 py-2 text-lg text-blueGray-900 border-t-2 border-b-2 border-blueGray-200">
                    <button role="button" class="px-4 py-2 mx-auto text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-700">Buy Now </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    

    )
}


export default cart