import { BrowserRoute as Router, Link, useHistory } from "react-router-dom";
import Addevant from './Addevant'
import Userlist from './Userlist'
import Adduser from './Adduser'
import Message from "./Messages";
import Cartlist from './Cartlist'
import {useState} from 'react'


function View(){
   const [tab, setTab] = useState("")

   const history = useHistory();



   function logOut(){
      localStorage.clear();
      history.push("/login")

   }

    return(
        <div className=" flex flex-cols-2">
            
        <div className="w-48 px-4 bg-gray-200">
   <div className="h-3/4 flex flex-col justify-around text-gray-500">
      <h3 className="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-gray-700 transition duration-200 ease-in">
        <i class="fas fa-calendar-plus mr-3 text-center text-black text-xl"></i>
         <a className="hover:text-black transition duration-200 ease-linear" href="#" onClick = {(e)=> setTab("Add")}>  Add Event</a>
      </h3>

      <h3 className="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-gray-700 transition duration-200 ease-in">
         <i class="fas fa-users mr-2 text-center text-black text-xl"></i>
         <a className="hover:text-black transition duration-200 ease-linear" href="#" onClick = {(e)=> JSON.parse(localStorage.getItem('user')).role == 'admin' && setTab("list")}>User List</a>
      </h3>
      <h3 className="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-gray-700 transition duration-200 ease-in">
         <i class="fas fa-user-plus mr-2 text-center text-black text-lg" viewBox="0 0 20 20" fill="black"></i>
         <a className="hover:text-black transition duration-200 ease-linear" href="#" onClick = {(e)=> JSON.parse(localStorage.getItem('user')).role == 'admin' && setTab("create")}>Create User</a>
      </h3>
      <h3 className="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-gray-700 transition duration-200 ease-in">
         <i class="fas fa-envelope mr-3 text-center text-black text-xl"></i>
         <a className="hover:text-black transition duration-200 ease-linear" href="#" onClick = {(e)=> JSON.parse(localStorage.getItem('user')).role == 'admin' &&  setTab("message")}>Inbox</a>
      </h3>
         
      <h3 className="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-gray-700 transition duration-200 ease-in">
         <i class="fas fa-clipboard-list mr-3 text-center text-black text-xl"></i>
         <a className="hover:text-black transition duration-200 ease-linear" href="#" onClick = {(e)=> setTab("guest")}>Guests List</a>
      </h3>
      <h3 className="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-gray-700 transition duration-200 ease-in">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="black">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
         </svg>
         <a className="hover:text-black transition duration-200 ease-linear" href="#" onClick = {()=> logOut()}>Log Out</a>
      </h3>
   </div>
   
</div>

            {/* halkan ayuu imanayaa content-ku */}

            <div className = "m-auto h-screen w-full overflow-scroll">
             {tab === "Add" && Add()} 
             {tab === "list" && List()}
            {/* <PrivateRoute> */}
            {tab === "create" && Create()}
            {tab === "message" && Messages()}
            {tab === "guest" && Guests()}
            {/* </PrivateRoute> */}
            </div>

</div>

    )

    function Add(){
       return (
          
          <>
        <Addevant/>
         </>
       )
    }

    function List(){
       return(
          <>
          <Userlist/>
          </>
       )
    }

    function Create(){
       return <Adduser/>
    }

    function Messages(){
      return <Message/>
   }

   function Guests(){
      return <Cartlist/>
   }
}


export default View