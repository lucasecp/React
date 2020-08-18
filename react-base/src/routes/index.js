import React from 'react'
import { Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Alunos from '../pages/Alunos'
import Aluno from '../pages/Aluno'
import Register from '../pages/Register'
import Foto from '../pages/Foto'
import Error from '../pages/404'



import MyRoute from './myRoute'

export default function () {
  return (
     <Switch>
       <MyRoute exact path='/' component={Alunos} isClosed={false}/>
       <MyRoute  exact path='/login' component={Login} isClosed={false}/>
       <MyRoute  exact path='/register' component={Register} isClosed={false}/>
       <MyRoute  exact path='/aluno/:id/edit' component={Aluno} isClosed/>
       <MyRoute  exact path='/aluno' component={Aluno} isClosed/>
       <MyRoute  exact path='/foto/:id' component={Foto} isClosed/>
       <MyRoute path='*' component={Error}/>
     </Switch>
  )
}
