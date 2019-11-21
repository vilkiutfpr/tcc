import React, { Suspense } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"

import SbcPrivateRoute from "./Pages/Private/PrivateRoute"

import "./App.less"
import logo from "Assets/Brand/bc.png"

import { CBMSplashScreen } from "@cbmsc/components/dist/Components/Atoms/SplashScreen"

// Lazy loading
const SbcPrivatePages = React.lazy(() => import("./Pages/Private"))
const SbcAuth = React.lazy(() => import("./Pages/Auth"))

function App() {
    return (
        <Router>
            <Suspense fallback={<CBMSplashScreen image={logo} />}>
                <Switch>
                    <Route path='/auth' component={SbcAuth} />
                    <SbcPrivateRoute
                        path={["/", ""]}
                        component={SbcPrivatePages}
                    />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App
