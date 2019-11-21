import React, { useState, useEffect } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { withRouter } from "react-router-dom"

import { GET_TASKS } from "GraphQL/Tasks/Queries/tasks"

import { useLayoutContext } from "Pages/Layout/Context"
import ScgTaskForm from "./Form"

import { CBMTasks } from "@cbmsc/components/dist/Components/Templates/Tasks"
import { CBMButton } from "@cbmsc/components/dist/Components/Atoms/Button"
import { CBMDrawer } from "@cbmsc/components/dist/Components/Atoms/Drawer"
import { CBMAboutTask } from "@cbmsc/components/dist/Components/Organisms/AboutTask"
import { Modal } from "antd"
import { DELETE_TASK } from "GraphQL/Tasks/Mutations/delete"
import { updateTaskCacheOnDelete, updateTaskCacheOnUpdate } from "./Cache"
import { UPDATE_TASK } from "GraphQL/Tasks/Mutations/update"

const routes = [
    {
        path: "/",
        breadcrumbName: "Home"
    },
    {
        path: "/tarefas",
        breadcrumbName: "Tarefas"
    }
]

const ScgTasks = ({ history }) => {
    const [visible, setVisible] = useState(false)
    const [openFormDrawer, setOpenFormDrawer] = useState(false)
    const [item, setItem] = useState()

    const { setHeaderInfo } = useLayoutContext()

    useEffect(() => {
        setHeaderInfo({
            onBack: () => history.push("/inicio"),
            title: "Tarefas",
            breadcrumb: { routes }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [deleteTask] = useMutation(DELETE_TASK, {
        update: (cache, { data }) => updateTaskCacheOnDelete(cache, data, item)
    })

    const [
        updateTask,
        { data: completeData, loading: completeLoading }
    ] = useMutation(UPDATE_TASK, {
        update: updateTaskCacheOnUpdate
    })

    const onComplete = ({ id, done }) => {
        updateTask({
            variables: {
                data: { done: !done },
                where: { id }
            }
        })
    }

    useEffect(() => {
        if (!completeData) return
        setItem(completeData.updateTask)
    }, [completeData])

    const onDelete = item => {
        Modal.warn({
            title: "Você tem certeza que quer excluír essa atividade?",
            icon: "delete",
            centered: true,
            maskClosable: true,
            okButtonProps: { type: "danger" },
            okText: "Excluir",
            onOk: () => {
                deleteTask({
                    variables: { where: { id: item.id } }
                })
                setItem()
                setVisible(false)
            }
        })
    }

    const openAboutDrawer = item => {
        setItem(item)
        setVisible(true)
    }

    const closeAboutDrawer = () => {
        setVisible(false)
        setItem()
    }

    const closeFormDrawer = () => {
        setOpenFormDrawer(false)
    }

    const closeAllDrawers = () => {
        setVisible(false)
        setOpenFormDrawer(false)
        setItem(null)
    }

    const { data: todoList, loading: loadingTodoList } = useQuery(GET_TASKS, {
        variables: { where: { done: false } }
    })

    const { data: doneList, loading: loadingDoneList } = useQuery(GET_TASKS, {
        variables: { where: { done: true } }
    })

    return (
        <>
            <CBMTasks
                Actions={
                    <CBMButton
                        onClick={() => setOpenFormDrawer(true)}
                        type='primary'
                        ghost
                        icon='plus'
                    >
                        Nova tarefa
                    </CBMButton>
                }
                TodoListProps={{
                    source: todoList && todoList.tasks.items,
                    openAbout: openAboutDrawer,
                    loading: loadingTodoList
                }}
                DoneListProps={{
                    source: doneList && doneList.tasks.items,
                    openAbout: openAboutDrawer,
                    loading: loadingDoneList
                }}
                counters={{
                    ...(todoList && {
                        high: todoList.tasks.counters.high,
                        medium: todoList.tasks.counters.medium,
                        low: todoList.tasks.counters.low
                    })
                }}
            />
            <CBMDrawer
                width={500}
                scrollable
                zIndex={3}
                onClose={closeFormDrawer}
                dynamicPlacement
                visible={openFormDrawer}
            >
                <ScgTaskForm
                    closeDrawers={closeAllDrawers}
                    defaultValues={item}
                />
            </CBMDrawer>
            <CBMAboutTask
                visible={visible}
                closable={false}
                zIndex={2}
                loading={completeLoading}
                onClose={() => closeAboutDrawer()}
                onComplete={onComplete}
                task={item || {}}
                Actions={
                    <>
                        <CBMButton
                            className='mr-xs'
                            onClick={() => onDelete(item)}
                            icon='delete'
                            shape='round'
                            type='danger'
                            ghost
                        />
                        <CBMButton
                            onClick={() => {
                                setItem(item)
                                setOpenFormDrawer(true)
                            }}
                            icon='edit'
                            shape='round'
                            type='primary'
                            ghost
                        />
                    </>
                }
            />
        </>
    )
}

export default withRouter(ScgTasks)
