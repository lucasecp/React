import React from 'react'
import {Nav} from './styled'
import {FaHome,FaUser,FaPowerOff} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar'
import {useDispatch, useSelector} from 'react-redux'
import history from '../../services/history'
import * as action from '../../store/modules/auth/actions'
export default function () {
  const dispatch = useDispatch()
  const {email,name}= useSelector(state => state.auth.user)
  function handleClick(){
    dispatch(action.loginFalure())
    return history.push('/')
   }
  return (
     <Nav >
     <Link to='/' className='fa-header'> <FaHome size={30} /> </Link>
    {email?  (
    <div className='userIsLogged'>
   <Link to='/register' className='userData'> <Gravatar size={30} email={email} alt='gravatar'/>
                <div>{name}</div>
   </Link>
    <Link to='/' className='fa-header' onClick={handleClick}><FaPowerOff size={30}  /></Link>

    </div>

    ) :
    <div className='userIsNotLogged'>
       <Link to='/login' className='fa-header'> <FaUser size={30} color='#fff'/>Entrar</Link>
    </div>
    }
    </Nav>
  )
}

