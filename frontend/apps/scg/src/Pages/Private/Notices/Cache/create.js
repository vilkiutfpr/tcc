import { GET_NOTICES } from "GraphQL/Notices/Queries/notices"

export const updateNoticeCacheOnCreate = (
    cache,
    { data: { createNotice } }
) => {
    let { notices } = cache.readQuery({
        query: GET_NOTICES,
        variables: { where: {} }
    })

    notices = [...notices, { ...createNotice }]

    cache.writeQuery({
        query: GET_NOTICES,
        variables: { where: {} },
        data: { notices }
    })
}
