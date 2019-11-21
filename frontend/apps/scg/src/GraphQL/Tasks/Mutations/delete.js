import gql from "graphql-tag"

export const DELETE_TASK = gql`
    mutation DeleteTask($where: TaskWhereUniqueInput!) {
        deleteTask(where: $where) {
            id
        }
    }
`
