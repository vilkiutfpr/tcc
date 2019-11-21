import React, { Suspense } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"

import ScgPrivateRoute from "./Pages/Private/PrivateRoute"

import "./App.less"
import logo from "Assets/Brand/cbmsc.png"

import { CBMSplashScreen } from "@cbmsc/components/dist/Components/Atoms/SplashScreen"

// Lazy loading
const ScgPrivatePages = React.lazy(() => import("./Pages/Private"))
const ScgAuth = React.lazy(() => import("./Pages/Auth"))

function App() {
    return (
        <Router>
            <Suspense fallback={<CBMSplashScreen image={logo} />}>
                <Switch>
                    <Route path='/auth' component={ScgAuth} />
                    <ScgPrivateRoute
                        path={["/", ""]}
                        component={ScgPrivatePages}
                    />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App
