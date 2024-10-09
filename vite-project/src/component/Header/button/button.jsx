import React from 'react'

function button({children, ...otherProps}) {
  return (
    <button className='btn' {...otherProps}>
     {children}
    </button>
  )
}

export default button