import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Dashboard from './dashboard/Dashboard'

const Index = () => {
    return (
        <Switch>
            {<Redirect exact from="/" to="/dashboard" />}
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    )
}

export default Index
