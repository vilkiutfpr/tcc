import gql from "graphql-tag"

export const UPDATE_NOTICE = gql`
    mutation UpdateNotice(
        $data: NoticeUpdateInput!
        $where: NoticeWhereUniqueInput!
    ) {
        updateNotice(data: $data, where: $where) {
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
