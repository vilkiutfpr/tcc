import React, { Suspense } from "react"
import { Switch, Route } from "react-router-dom"

import logo from "Assets/Brand/cbmsc.png"

import { CBMSplashScreen } from "@cbmsc/components/dist/Components/Atoms/SplashScreen"

const ScgAppointmentsBCs = React.lazy(() => import("./BCs"))

const ScgAppointments = ({ match: { url } }) => {
    return (
        <Suspense fallback={<CBMSplashScreen image={logo} />}>
            <Switch>
                <Route path='/bcs' component={ScgAppointmentsBCs} />
                <Route
                    path={[`${url}`, `${url}/`]}
                    component={ScgAppointmentsBCs}
                />
            </Switch>
        </Suspense>
    )
}

export default ScgAppointments
