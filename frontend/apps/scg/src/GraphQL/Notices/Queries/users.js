import gql from "graphql-tag"

export const GET_USERS = gql`
    query Users($where: UserWhereInput!) {
        users(where: $where) {
            id
            email
        }
    }
`
