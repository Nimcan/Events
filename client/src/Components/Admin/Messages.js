import {useEffect, useState} from 'react'
import axios from 'axios'
// import {useParams} from 'react-router-dom'


 
function Message(){

   const [message, setMessage] = useState([])
   console.log(message)
   useEffect(()=>{
      axios.get("http://localhost:8000/message/messages").then((res)=> setMessage(res.data.allMessages))
   },[])

   // const {id} = useParams()
  
   //  Delete message 
   function Delete(id){
      axios.delete(`http://localhost:8000/message/${id}`).then((res)=> console.log(res))

   }
    return(
       <div className = "flex flex-col-3 flex-wrap justify-center">
      {message.map((messages)=>  
        <div class="flex  bg-white shadow-lg rounded-lg  mx-3 my-2 max-w-md md:max-w-1xl ">
   
   <div class="flex items-start px-4 py-6">
      <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>
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


