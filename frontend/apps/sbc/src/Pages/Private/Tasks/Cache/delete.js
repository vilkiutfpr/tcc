import { GET_TASKS } from "GraphQL/Tasks/Queries/tasks"

export const updateTaskCacheOnDelete = (
    cache,
    { deleteTask },
    selectedItem
) => {
    let { tasks } = cache.readQuery({
        query: GET_TASKS,
        variables: {
            where: {
                done: selectedItem.done
            }
        }
    })

    tasks.items = tasks.items.filter(item => item.id !== deleteTask.id)

    tasks.counters = {
        ...tasks.counters,
        [selectedItem.priority.toLowerCase()]:
            tasks.counters[selectedItem.priority.toLowerCase()] - 1
    }

    cache.writeQuery({
        query: GET_TASKS,
        variables: {
            where: {
                done: selectedItem.done
            }
        },
        data: {
            tasks
        }
    })
}
