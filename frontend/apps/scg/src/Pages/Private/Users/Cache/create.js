import { GET_USERS } from "GraphQL/Users/Queries/users"

export const updateUserCacheOnCreate = (cache, { data: { createUser } }) => {
    let { users } = cache.readQuery({
        query: GET_USERS
    })

    users = [...users, { ...createUser }]

    cache.writeQuery({
        query: GET_USERS,
        data: { users }
    })
}
