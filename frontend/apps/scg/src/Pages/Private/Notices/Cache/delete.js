import { GET_NOTICES } from "GraphQL/Notices/Queries/notices"

export const updateNoticeCacheOnDelete = (
    cache,
    { data: { deleteNotice } }
) => {
    let { notices } = cache.readQuery({
        query: GET_NOTICES,
        variables: {
            where: {}
        }
    })

    notices = notices.filter(item => item.id !== deleteNotice.id)

    cache.writeQuery({
        query: GET_NOTICES,
        variables: {
            where: {}
        },
        data: {
            notices
        }
    })
}
