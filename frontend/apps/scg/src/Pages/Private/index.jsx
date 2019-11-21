import React, { useEffect, Suspense } from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import ScgLayout from "../Layout"
import { ScgLayoutProvider } from "Pages/Layout/Context"
import { useAuthContext } from "Hooks/Auth"
import { useApolloClient } from "@apollo/react-hooks"
import { GET_ME } from "GraphQL/Auth/Query/me"

import logo from "Assets/Brand/cbmsc.png"

import { CBMSplashScreen } from "@cbmsc/components/dist/Components/Atoms/SplashScreen"

// const ScgHome = React.lazy(() => import("./Home"))
const ScgTasks = React.lazy(() => import("./Tasks"))
const ScgNotices = React.lazy(() => import("./Notices"))
const ScgUsers = React.lazy(() => import("./Users"))
const ScgAppointments = React.lazy(() => import("./Appointments"))

const ScgPrivatePages = ({ match: { url } }) => {
    const client = useApolloClient()
    const { setMe } = useAuthContext()

    useEffect(() => {
        const getMe = async () => {
            try {
                const { data } = await client.query({ query: GET_ME })
                setMe(data.me)
            } catch {}
        }

        getMe()
    })

    // TODOS: If add BM Appointments, change route to only /agenda and use router into them.
    return (
        <ScgLayoutProvider>
            <ScgLayout>
                <Suspense fallback={<CBMSplashScreen image={logo} />}>
                    <Switch>
                        {/* <Route path='/inicio' component={ScgHome} /> */}
                        <Route path='/tarefas' component={ScgTasks} />
                        <Route path='/avisos' component={ScgNotices} />
                        <Route path='/usuarios' component={ScgUsers} />
                        <Route path='/agenda' component={ScgAppointments} />
                        <Route
                            path={[`${url}`, `${url}/`, "*"]}
                            render={() => <Redirect to={`${url}usuarios`} />}
                        />
                    </Switch>
                </Suspense>
            </ScgLayout>
        </ScgLayoutProvider>
    )
}

export default ScgPrivatePages
