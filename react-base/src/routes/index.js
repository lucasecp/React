import React from 'react'
import { Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Error from '../pages/404'
import MyRoute from './myRoute'

export default function () {
  return (
     <Switch>
       <MyRoute exact path='/' component={Login}/>
       <MyRoute path='*' component={Error}/>
     </Switch>
  )
}
