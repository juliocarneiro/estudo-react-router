import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Home from '../main/home'
import About from '../about/about'
import Todo from '../todo/todo'
import NotFound from '../main/notfound'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/todo" component={Todo} />
        <Route path="/about" component={About} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404"/>
    </Router>
)