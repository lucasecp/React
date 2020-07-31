import React from 'react'
import {Nav} from './styled'
import {FaHome, FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

export default function () {
  const btnClick = useSelector((state)=> state.exemple.btnClick );
  console.log(btnClick);
  return (
     <Nav >
        {btnClick ? 'sucesso' : 'falha'}
     <Link to='/' className='fa-header'> <FaHome /> </Link>
    <Link to='/' className='fa-header'> <FaSignInAlt/></Link>
    </Nav>
  )
}

