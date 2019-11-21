import React, { useState } from "react"
import { useApolloClient } from "@apollo/react-hooks"
import { withRouter } from "react-router-dom"

import { SIGN_IN } from "GraphQL/Auth/Mutations/sign-in"

import { CBMSignIn } from "@cbmsc/components/dist/Components/Pages/SignIn"
import { message } from "antd"
import logo from "Assets/Brand/bc.png"

const SbcSignIn = ({ history }) => {
    const [loading, setLoading] = useState()
    const client = useApolloClient()

    //TODO: change [] = useMutation
    const onSubmit = async fields => {
        setLoading(true)
        try {
            const { data } = await client.mutate({
                mutation: SIGN_IN,
                variables: {
                    ...fields,
                    platform: process.env.REACT_APP_PLATFORM
                }
            })

            localStorage.setItem(
                process.env.REACT_APP_TOKEN_STG_KEY,
                data.signIn.token
            )

            message.success("Bem vindo!")

            history.push("/inicio")
        } catch (e) {
            e.graphQLErrors.forEach(item => {
                switch (item.message.statusCode) {
                    case 400:
                        message.error("E-mail ou senha inválidos!")
                        break
                    default:
                        message.error("Ocorreu um erro ao acessar o sistema")
                }
            })
        }

        setLoading(false)
    }

    return (
        <CBMSignIn
            appName='Sistema de Bombeiro Comunitário'
            logo={logo}
            loading={loading}
            onSubmit={onSubmit}
        />
    )
}

export default withRouter(SbcSignIn)
