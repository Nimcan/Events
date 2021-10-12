import {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router'

function User(){

  const {id} = useParams()

  const[user, setUser] = useState({
    userName:"",
    email:"",
    tittle:"",
    password:""
  })
  console.log(user)

  useEffect(()=>{
    axios.get(`http://localhost:8000/user/users/${id}`).then((res)=> setUser(res.data.userId))
  },[])

  function save(){
    axios.post("http://localhost:8000/user/users", user).then((res)=> console.log(res))    
  }

    return(
        <section class="text-blueGray-700 ">
            <div class="container items-center px-5 py-5 lg:px-0">
            <h1 className="text-center text-3xl font-bold my-4 ">Create Account </h1>
              <div class="flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-2/6 md:w-1/2 md:mt-0 bg-gray-200">
                <div class="relative ">
                  <label for="email" class="text-base leading-7 text-blueGray-500">Name</label>
                  <input type="name" id="email" name="email" placeholder="Enter your Nmae" class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" value = {user.userName} onChange = {(e)=> setUser({...user, userName:e.target.value})} />
                </div>
                <div class="relative mt-4">
                  <label for="name" class="text-base leading-7 text-blueGray-500">Email</label>
                  <input type="name" id="name" name="name" placeholder="Enter Email" class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" value = {user.email} onChange = {(e)=> setUser({...user, email:e.target.value})}/>
                </div>
                <div class="relative mt-4">
                  <label for="name" class="text-base leading-7 text-blueGray-500">Tittle</label>
                  <input type="name" id="name" name="name" placeholder="Enter Tittle" class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" value = {user.tittle} onChange = {(e)=> setUser({...user, tittle:e.target.value})}/>
                </div>

                <div class="relative mt-4">
                  <label for="password" class="text-base leading-7 text-blueGray-500">Password</label>
                  <input type="password" id="password" name="password" placeholder="Enter password" class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" value = {user.password} onChange = {(e)=> setUser({...user, password:e.target.value})}/>
                </div>
                <div class="inline-flex flex-wrap items-center justify-between ">

                  {id === undefined ?
                  <button class="w-full px-4 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" onClick = {()=> save()} > Sing Up </button>:
                  
                  <button class="w-full px-4 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800" onClick = {()=> save()} > Update </button> }
                </div>
              </div>
            </div>
          </section>
    )
}

export default User