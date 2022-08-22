import axios from 'axios'
import React from 'react'
 import { useParams } from 'react-router-dom'
import {useSearchParams} from 'react-router-dom'
import  { useEffect } from 'react'
import {useState} from 'react'

function Userview() {
    const params=useParams()
    const [searchParams,setSearchParams]=useSearchParams()
    console.log(...searchParams)
    const[userData,setUserData]= useState({})
    useEffect(() => {
      loadUser()
    }, [])
    
    let loadUser = async ()=>{
      try{
        let user=await axios.get(`https://6301ec84c6dda4f287af4f45.mockapi.io/users/${params.id}`)
        setUserData(user.data)
       
      }
      catch(error){

      }
    }
  return (
    
  <>
    <h3>Name : {userData.name}</h3>
    <h3>Position : {userData.position}</h3>
    <h3>Office : {userData.office}</h3>
    <h3>Age : {userData.age}</h3>
    <h3>Salary : {userData.salary}</h3>
    <h3>Start Date : {userData.startDate}</h3>
    </>
  )
}

export default Userview