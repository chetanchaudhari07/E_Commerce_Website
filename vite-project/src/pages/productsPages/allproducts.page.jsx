import React from 'react'
import { Link } from 'react-router-dom'

function allproducts() {
  return (
    
    <>
    <div>

       <ul>
       <li style={{listStyleType:'none '}}><Link to='/allProduct'>All Products</Link></li>
       </ul>

    </div>
    </>
  )
}

export default allproducts