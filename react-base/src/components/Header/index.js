import React from 'react'
import {Nav} from './styled'
import {FaHome, FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function () {
  return (
     <Nav >
     <Link to='/' className='fa-header'> <FaHome /> </Link>
    <Link to='/' className='fa-header'> <FaSignInAlt/></Link>
    </Nav>
  )
}

