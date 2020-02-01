import React from 'react';
import {routes} from './routes';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFoundComponent'

export default class Routes extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    {routes.map(r => (
                        <Route
                            key = {r.path}
                            exact = {r.exact}
                            path = {r.path}
                            component = {r.component}
                        />
                    ))}

                    <Route exact path = '/404' component = {NotFound}/>
                    <Route exact path = '/'>
                        <Redirect to = '/home'/>
                    </Route>
                    <Route path = "*">
                        <Redirect to = '/404' />
                    </Route>
                </Switch>
            </React.Fragment>
        )
    }
}
