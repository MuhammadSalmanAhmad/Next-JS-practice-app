import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

function Loading() {
  return (
    <div>

        <h2 className='text-white'>LOADING</h2>
        <ClipLoader
        color={'red'}
        loading={true}
        cssOverride={{
            display: 'block',
            margin: '0 auto',
            borderColor: 'red',
            width: '100px',

        }}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
    </div>
  )
}

export default Loading
