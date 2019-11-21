import gql from "graphql-tag"

export const UPDATE_USER = gql`
    mutation UpdateUser($data: UserUpdateInput!) {
        updateUser(data: $data) {
            id
            name
            email
            role
        }
    }
`
