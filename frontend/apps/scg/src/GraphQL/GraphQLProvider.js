import React from "react"
import ApolloClient, { InMemoryCache } from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import { message as ANTMessage } from "antd"

let didShowError = false

const client = new ApolloClient({
    uri: "backend",
    cache: new InMemoryCache({
        addTypename: false
    }),

    onError: ({ graphQLErrors, networkError }) => {
        //TODO: Make a error page and redirect to its
        if (networkError) {
            return ANTMessage.error(
                "Ocorreu um problema, por favor tente novamente."
            )
        }
        if (graphQLErrors) {
            graphQLErrors.forEach(({ message: { statusCode } }) => {
                if (statusCode === 401) {
                    if (!didShowError) {
                        didShowError = true
                        ANTMessage.error(
                            "Sua sessão expirou. Por favor faça novamente o login."
                        )
                    }

                    window.location.hash = "/auth/signin"
                }
            })
        } else {
            if (didShowError) didShowError = false
        }
    },

    request: async operation =>
        operation.setContext({
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    process.env.REACT_APP_TOKEN_STG_KEY
                )}`
            }
        })
})

const ScgGraphQLProvider = props => (
    <ApolloProvider client={client} {...props} />
)

export default ScgGraphQLProvider
