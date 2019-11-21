import { GET_USERS } from "GraphQL/Users/Queries/users"

export const updateUserCacheOnUpdate = (cache, { data: { updateUser } }) => {
    let { users } = cache.readQuery({
        query: GET_USERS
    })

    users = users.map(item => (item.id !== updateUser.id ? item : updateUser))

    cache.writeQuery({
        query: GET_USERS,

        data: {
            users
        }
    })
}
