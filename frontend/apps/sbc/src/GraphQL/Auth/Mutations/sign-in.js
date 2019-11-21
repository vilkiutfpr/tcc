import gql from "graphql-tag"

export const SIGN_IN = gql`
    mutation SignIn($email: String!, $password: String!, $platform: String!) {
        signIn(email: $email, password: $password, platform: $platform) {
            token
        }
    }
`
