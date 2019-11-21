import React, { useState, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"

const ScgPrivateRoute = ({ component: Component, ...rest }) => {
    const [logged, setLogged] = useState(true)

    useEffect(() => {
        !localStorage.getItem(process.env.REACT_APP_TOKEN_STG_KEY) &&
            setLogged(false)
    }, [])

    return (
        <Route
            {...rest}
            render={props =>
                logged ? <Component {...props} /> : <Redirect to='/auth' />
            }
        />
    )
}

export default ScgPrivateRoute
