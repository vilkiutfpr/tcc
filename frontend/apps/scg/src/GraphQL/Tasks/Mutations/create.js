import gql from "graphql-tag"

export const CREATE_TASK = gql`
    mutation CreateTask($data: TaskCreateInput!) {
        createTask(data: $data) {
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
