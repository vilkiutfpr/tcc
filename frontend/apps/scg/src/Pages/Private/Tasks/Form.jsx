import React, { useState } from "react"
import PropTypes from "prop-types"
import { CBMTaskForm } from "@cbmsc/components/dist/Components/Organisms/TaskForm"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { GET_USERS } from "GraphQL/Tasks/Queries/users"
import { GET_CATEGORIES } from "GraphQL/Tasks/Queries/categories"
import { CREATE_TASK } from "GraphQL/Tasks/Mutations/create"
import { UPDATE_TASK } from "GraphQL/Tasks/Mutations/update"
import { message } from "antd"
import { updateTaskCacheOnCreate, updateTaskCacheOnUpdate } from "./Cache"

const ScgTaskForm = ({ defaultValues, closeDrawers, ...props }) => {
    const [loading, setLoading] = useState(false)

    const [saveTask] = useMutation(CREATE_TASK, {
        update: updateTaskCacheOnCreate
    })

    const [updateTask] = useMutation(UPDATE_TASK, {
        update: updateTaskCacheOnUpdate
    })

    const onSaveTask = async values => {
        setLoading(true)

        try {
            if (!defaultValues) {
                await saveTask({ variables: { data: { ...values } } })
            } else {
                await updateTask({
                    variables: {
                        data: { ...values },
                        where: { id: defaultValues.id }
                    }
                })
            }

            closeDrawers()
        } catch (e) {
            message.error(
                "Ocorreu um erro. Por favor, tente novamente mais tarde."
            )
        }

        setLoading(false)
    }

    const { data: usersData } = useQuery(GET_USERS, {
        variables: { where: {} }
    })

    const { data: categoriesData } = useQuery(GET_CATEGORIES, {
        variables: { where: {} }
    })

    return (
        <CBMTaskForm
            onSave={onSaveTask}
            loading={loading}
            responsiblesSource={(usersData && usersData.users) || []}
            categories={(categoriesData && categoriesData.categories) || []}
            defaultValues={defaultValues}
            {...props}
        />
    )
}

ScgTaskForm.propTypes = {
    closeDrawers: PropTypes.func
}

export default ScgTaskForm
