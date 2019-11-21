import gql from "graphql-tag"

export const CREATE_NOTICE = gql`
    mutation CreateNotice($data: NoticeCreateInput!) {
        createNotice(data: $data) {
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
