import React, {useState,useEffect} from 'react'
export default function Contact() {
    const[number , setNumber] = useState("")
useEffect(() => {
  setNumber("05xxxxxxxx")
}, [])
    return (
        <div>
            <h1>Contact</h1>
            <h1>number is : {number}</h1>
        </div>
    )
}