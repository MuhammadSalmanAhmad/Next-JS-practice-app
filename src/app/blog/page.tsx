import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center h-screen w-screen bg-slate-400'>
        <h2>Welcome to my blog</h2>
        <button className='px-2 py-2 rounded-2xl bg-slate-950 text-white'>
            <Link href={'/'}> Back to home </Link>
        </button>
      
    </div>
  )
}

export default page
