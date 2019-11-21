import React, { useEffect, Suspense } from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import SbcLayout from "../Layout"
import { SbcLayoutProvider } from "Pages/Layout/Context"
import { useAuthContext } from "Hooks/Auth"
import { useApolloClient } from "@apollo/react-hooks"
import { GET_ME } from "GraphQL/Auth/Query/me"

import SbcSplashScreen from "Components/SplashScreen"

const SbcAppointments = React.lazy(() => import("./Appointments"))
const SbcTasks = React.lazy(() => import("./Tasks"))
const SbcHome = React.lazy(() => import("./Home"))

const SbcPrivatePages = ({ match: { url } }) => {
    const client = useApolloClient()
    const { setMe, me } = useAuthContext()

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
    return !me ? (
        <SbcSplashScreen />
    ) : (
        <SbcLayoutProvider>
            <SbcLayout>
                <Suspense fallback={<SbcSplashScreen />}>
                    <Switch>
                        <Route
                            path='/agendamentos'
                            component={SbcAppointments}
                        />
                        <Route path='/tarefas' component={SbcTasks} />
                        <Route path='/inicio' component={SbcHome} />
                        <Route
                            path={[`${url}`, `${url}/`]}
                            render={() => <Redirect to={`/inicio`} />}
                        />
                    </Switch>
                </Suspense>
            </SbcLayout>
        </SbcLayoutProvider>
    )
}

export default SbcPrivatePages
