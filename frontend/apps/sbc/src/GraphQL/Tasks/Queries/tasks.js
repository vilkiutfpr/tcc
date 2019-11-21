import gql from "graphql-tag"

export const GET_TASKS = gql`
    query UserTasks($where: TaskWhereInput!) {
        userTasks(where: $where) {
            counters {
                high
                medium
                low
            }
            items {
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
    }
`
