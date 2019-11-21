import gql from "graphql-tag"

export const GET_NOTICES = gql`
    query GetNotices {
        notices {
            id
            title
            description
            createdBy {
                id
                email
                name
            }
            priority
            assignedTo {
                id
                email
                name
            }
            seenBy {
                id
                email
                name
            }

            categories {
                id
                name
            }
        }
    }
`
