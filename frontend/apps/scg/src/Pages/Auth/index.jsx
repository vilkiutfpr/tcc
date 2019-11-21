import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

const ScgSignIn = React.lazy(() => import("./SignIn"))

const ScgAuth = ({ match: { url } }) => {
    return (
        <Switch>
            <Route path={`${url}/login`} component={ScgSignIn} />
            <Route path='*' render={() => <Redirect to={`${url}/login`} />} />
        </Switch>
    )
}

export default ScgAuth
