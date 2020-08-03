import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//Pages
import Home from './pages/Home'
import CityDetails from './pages/CityDetails'
import PersonDetails from './pages/PersonDetails'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/citydetails" component={CityDetails} />
            <Route path="/persondetails" component={PersonDetails} />
               
            </Switch>
        </BrowserRouter>
    )

}