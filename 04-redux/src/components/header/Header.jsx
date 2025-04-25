import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/basket">Basket</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header