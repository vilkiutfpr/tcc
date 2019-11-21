import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

const SbcSignIn = React.lazy(() => import("./SignIn"))

const SbcAuth = ({ match: { url } }) => {
    return (
        <Switch>
            <Route path={`${url}/login`} component={SbcSignIn} />
            <Route path='*' render={() => <Redirect to={`${url}/login`} />} />
        </Switch>
    )
}

export default SbcAuth
