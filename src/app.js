import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* Components */

import Home from './components/home'
import Todo from './components/todoList'

const App = () => {
  return (
    <div className="app-main">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/todo" component={Todo} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App