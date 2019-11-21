import gql from "graphql-tag"

export const DELETE_NOTICE = gql`
    mutation DeleteNotice($where: NoticeWhereUniqueInput!) {
        deleteNotice(where: $where) {
            id
        }
    }
`
