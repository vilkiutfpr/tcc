import gql from "graphql-tag"

export const GET_TASKS = gql`
    query Tasks($where: TaskWhereInput!) {
        tasks(where: $where) {
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
