import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
     <Link to='/' className='link'>Movies</Link>

     <ul>
       <div className='nav-links'>
       <Link to='/watchlist'>
        <li>Watchlist</li>
       </Link>

       <Link to='/watched'>
        <li>Watched</li>
       </Link>

       <Link to='/add' className='btn'>
        <li>+Add</li>
       </Link>
       </div>
     </ul>
    </div>
  )
}

export default Nav
