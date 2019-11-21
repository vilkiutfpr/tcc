import gql from "graphql-tag"

export const GET_CATEGORIES = gql`
    query Categories($where: CategoryWhereInput!) {
        categories(where: $where) {
            id
            name
        }
    }
`
