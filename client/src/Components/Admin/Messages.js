import {useEffect, useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


 
function Message(){

   const [message, setMessage] = useState([])
   console.log(message)
   useEffect(()=>{
      axios.get("http://localhost:8000/message/messages").then((res)=> setMessage(res.data.allMessages))
   },[])

  
   //  Delete message 
   function Delete(id){
      axios.delete(`http://localhost:8000/message/${id}`).then((res)=> {
         console.log(res)
         alert("are you sure to delete message")
         toast.warning("Message is deleted")
      })

   }
    return(
       
       <div className = "flex flex-col-3 flex-wrap justify-center bg-gray-900">
      {message.map((messages)=>  
        <div class="flex  bg-white shadow-lg rounded-lg  mx-3 my-2 max-w-md md:max-w-1xl ">
   
   <div class="flex items-start px-4 py-6">
      <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="./images/profile.png" alt="avatar"/>
      <div class="">
         <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900 -mt-1">{messages.name}</h2>
            <small class="text-sm text-gray-700" onClick = {()=> Delete(messages._id)}><i class="fas fa-trash-alt"></i></small>
         </div>
         <p class="text-white-700 " >{messages.email} </p>
         <p class="mt-3 text-gray-900 text-sm">
            {messages.feedback}
         </p>
         <div class="mt-4 flex items-center">
         </div>
      </div>
      
   </div>
   
</div>
)}
</div>
    )
}


export default Message


