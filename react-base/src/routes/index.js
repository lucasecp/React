import React from 'react'
import { Route ,Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Error from '../pages/404'


export default function () {
  return (
     <Switch>
       <Route exact path='/' component={Login}/>
       <Route  path='*' component={Error}/>
     </Switch>
  )
}
