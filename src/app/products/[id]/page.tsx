import React from 'react'

async function productDetials({params}: { params: { id: string } }) {
  let {id} =  await params
  return (
    <div>
      <p>Product Details of ID : {id}</p>
    </div>
  )
}

export default productDetials
