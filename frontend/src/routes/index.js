import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Users from '../pages/Users'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Users} />
    </Switch>
  )
}