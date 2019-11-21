import { GET_NOTICES } from "GraphQL/Notices/Queries/notices"

export const updateNoticeCacheOnUpdate = (
    cache,
    { data: { updateNotice } }
) => {
    let { notices } = cache.readQuery({
        query: GET_NOTICES,
        variables: {
            where: {}
        }
    })

    notices = notices.map(item =>
        item.id !== updateNotice.id ? item : updateNotice
    )

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
