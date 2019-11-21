import gql from "graphql-tag"

export const DELETE_USER = gql`
    mutation DeleteUser($where: UserWhereUniqueInput!) {
        deleteUser(where: $where) {
            id
        }
    }
`
