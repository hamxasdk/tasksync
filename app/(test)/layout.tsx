import React from 'react'

const TestLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full'>
        <div>this is a navbar</div>
        <hr />
        {children}</div>
  )
}

export default TestLayout