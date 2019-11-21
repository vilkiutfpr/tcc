import gql from "graphql-tag"

export const GET_USERS = gql`
    query GetUsers {
        users {
            id
            name
            email
            role
        }
    }
`
