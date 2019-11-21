import gql from "graphql-tag"

export const UPDATE_TASK = gql`
    mutation UpdateTask(
        $data: TaskUpdateInput!
        $where: TaskWhereUniqueInput!
    ) {
        updateTask(data: $data, where: $where) {
            id
            title
            description
            priority
            document
            address
            date
            done
            assignedTo {
                email
                id
            }
            assignedBy {
                email
                id
            }
            categories {
                id
                name
            }
        }
    }
`
