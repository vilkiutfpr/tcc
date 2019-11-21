import gql from "graphql-tag"

export const GET_NOTICES = gql`
    query UserNotices {
        userNotices {
            title
            description
        }
    }
`
