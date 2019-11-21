import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"

import App from "./App"
import ScgGraphQLProvider from "GraphQL/GraphQLProvider"
import { ScgAuthProvider } from "Hooks/Auth"

const ScgApp = () => (
    <ScgGraphQLProvider>
        <ScgAuthProvider>
            <App />
        </ScgAuthProvider>
    </ScgGraphQLProvider>
)

ReactDOM.render(<ScgApp />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
