'use client'
import React from 'react'


function products() {
    let products=["Gucci","Armani"]
  return (
    
    <div>
      {
       products.map((product,index)=>{
         return <h1 key={index}>{product}</h1>
       })

      }
    </div>
  )
}

export default products
