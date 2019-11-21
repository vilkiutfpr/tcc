import { GET_TASKS } from "GraphQL/Tasks/Queries/tasks"

export const updateTaskCacheOnUpdate = (cache, { data: { updateTask } }) => {
    let { tasks } = cache.readQuery({
        query: GET_TASKS,
        variables: {
            where: { done: updateTask.done }
        }
    })

    const taskItem = tasks.items.find(item => item.id === updateTask.id)

    if (!taskItem) {
        let { tasks: oppositeTasks } = cache.readQuery({
            query: GET_TASKS,
            variables: {
                where: { done: !updateTask.done }
            }
        })

        oppositeTasks.items = oppositeTasks.items.filter(
            item => item.id !== updateTask.id
        )

        cache.writeQuery({
            query: GET_TASKS,
            variables: {
                where: { done: !updateTask.done }
            },
            data: {
                tasks: {
                    items: [...oppositeTasks.items],
                    counters: {
                        ...oppositeTasks.counters,
                        [updateTask.priority.toLowerCase()]:
                            oppositeTasks.counters[
                                updateTask.priority.toLowerCase()
                            ] - 1
                    }
                }
            }
        })

        cache.writeQuery({
            query: GET_TASKS,
            variables: {
                where: { done: updateTask.done }
            },
            data: {
                tasks: {
                    ...tasks,
                    items: [...tasks.items, { ...updateTask }],
                    counters: {
                        ...tasks.counters,
                        [updateTask.priority.toLowerCase()]:
                            tasks.counters[updateTask.priority.toLowerCase()] +
                            1
                    }
                }
            }
        })

        return
    }

    const oldTask = tasks.items.find(item => item.id === updateTask.id)

    tasks.items = tasks.items.map(item =>
        item.id !== updateTask.id ? item : updateTask
    )

    cache.writeQuery({
        query: GET_TASKS,
        variables: {
            where: { done: updateTask.done }
        },
        data: {
            tasks: {
                items: [...tasks.items],
                counters: {
                    ...tasks.counters,
                    [oldTask.priority.toLowerCase()]:
                        tasks.counters[oldTask.priority.toLowerCase()] - 1,
                    [updateTask.priority.toLowerCase()]:
                        tasks.counters[updateTask.priority.toLowerCase()] + 1
                }
            }
        }
    })
}
