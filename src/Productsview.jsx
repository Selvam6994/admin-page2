import axios from 'axios'
import React from 'react'
 import { useParams } from 'react-router-dom'
import {useSearchParams} from 'react-router-dom'
import  { useEffect } from 'react'
import {useState} from 'react'


function Productsview() {
    const params=useParams()
    const [searchParams,setSearchParams]=useSearchParams()
    console.log(...searchParams)
    const[userData,setUserData]= useState({})
    useEffect(() => {
      loadUser()
    }, [])
    
    let loadUser = async ()=>{
      try{
        let user=await axios.get(`https://6301ec84c6dda4f287af4f45.mockapi.io/Products/${params.id}`)
        setUserData(user.data)
       
      }
      catch(error){

      }
    }
  return (
    <>
    <h3>Name : {userData.name}</h3>
    <h3>Model : {userData.model}</h3>
    <h3>Fuel : {userData.fuel}</h3>
    <h3>Color : {userData.color}</h3>
    <h3>Price : {userData.price}</h3>
    </>
  )
}

export default Productsview