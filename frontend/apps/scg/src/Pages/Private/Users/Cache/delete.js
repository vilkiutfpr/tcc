import { GET_USERS } from "GraphQL/Users/Queries/users"

export const updateUserCacheOnDelete = (cache, { data: { deleteUser } }) => {
    let { users } = cache.readQuery({
        query: GET_USERS
    })

    users = users.filter(item => item.id !== deleteUser.id)

    cache.writeQuery({
        query: GET_USERS,
        data: {
            users
        }
    })
}
