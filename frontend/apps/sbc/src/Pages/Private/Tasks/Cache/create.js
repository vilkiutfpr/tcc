import { GET_TASKS } from "GraphQL/Tasks/Queries/tasks"

export const updateTaskCacheOnCreate = (cache, { data: { createTask } }) => {
    let { tasks } = cache.readQuery({
        query: GET_TASKS,
        variables: {
            where: { done: createTask.done }
        }
    })

    tasks = {
        ...tasks,
        ...(!createTask.done && {
            counters: {
                ...tasks.counters,
                [createTask.priority.toLowerCase()]:
                    tasks.counters[createTask.priority.toLowerCase()] + 1
            }
        }),
        items: [...tasks.items, { ...createTask }]
    }

    cache.writeQuery({
        query: GET_TASKS,
        variables: {
            where: { done: createTask.done }
        },
        data: { tasks }
    })
}
