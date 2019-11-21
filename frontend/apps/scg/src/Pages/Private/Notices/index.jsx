import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import { useMutation } from "@apollo/react-hooks"
import { message } from "antd"

import { useAuthContext } from "Hooks/Auth"
import { useLayoutContext } from "Pages/Layout/Context"

import { DELETE_NOTICE } from "GraphQL/Notices/Mutations/delete"
import { UPDATE_NOTICE } from "GraphQL/Notices/Mutations/update"
import { CREATE_NOTICE } from "GraphQL/Notices/Mutations/create"

import { withCBMForm } from "@cbmsc/components/dist/Components/Molecules/Form"
import { CBMCrud } from "@cbmsc/components/dist/Components/Templates/Crud"
import { CBMButton } from "@cbmsc/components/dist/Components/Atoms/Button"

import { updateNoticeCacheOnDelete } from "./Cache/delete"
import { updateNoticeCacheOnCreate } from "./Cache/create"
import { updateNoticeCacheOnUpdate } from "./Cache/update"

import ScgNoticesAbout from "./About"
import ScgNoticesForm from "./Form"
import ScgNoticesList from "./List"

const routes = [
    {
        path: "/",
        breadcrumbName: "Home"
    },
    {
        path: "/avisos",
        breadcrumbName: "Avisos"
    }
]

const ScgNotices = ({ history, form }) => {
    const [item, setItem] = useState()
    const [showAbout, setShowAbout] = useState(false)
    const [showForm, setShowForm] = useState()
    const { setHeaderInfo } = useLayoutContext()
    const { me } = useAuthContext()

    const { getFieldDecorator, resetFields } = form

    useEffect(() => {
        setHeaderInfo({
            onBack: () => history.push("/inicio"),
            title: "Avisos",
            breadcrumb: { routes }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [createNotice, { loading: loadingCreate }] = useMutation(
        CREATE_NOTICE,
        {
            update: updateNoticeCacheOnCreate,
            onCompleted: () => {
                onCloseFormModal()
                resetFields()
                message.success("Aviso cadastrado!")
            }
        }
    )

    const [updateNotice, { loading: loadingUpdate }] = useMutation(
        UPDATE_NOTICE,
        {
            update: updateNoticeCacheOnUpdate,
            onCompleted: () => {
                onCloseFormModal()
                resetFields()
                message.success("Aviso atualizado!")
            }
        }
    )

    const [deleteNotice, { loading: loadingDelete }] = useMutation(
        DELETE_NOTICE,
        {
            update: updateNoticeCacheOnDelete,
            onCompleted: () => {
                setItem()
                setShowAbout(false)
            }
        }
    )

    const [onSeenNotice, { loading: loadingOnSeen }] = useMutation(
        UPDATE_NOTICE,
        {
            update: updateNoticeCacheOnUpdate,
            onCompleted: () => {
                setShowAbout(false)
                message.success("Este aviso foi lido!")
            }
        }
    )

    const onDelete = () => {
        deleteNotice({
            variables: {
                where: { id: item.id }
            }
        })
    }

    const onSeen = () => {
        const { id } = item

        onSeenNotice({
            variables: {
                where: {
                    id
                },
                data: {
                    seenBy: [{ id: me.id }]
                }
            }
        })
    }

    const onEdit = () => {
        setShowForm(true)
    }

    const onListClick = item => {
        setItem(item)
        setShowAbout(true)
    }

    const onCloseFormModal = () => {
        setItem()
        setShowForm(false)
        setShowAbout(false)
    }

    const onSubmit = async fields => {
        try {
            const {
                assignedTo: assignedToIds,
                createdBy: createdById,
                categories: categoriesIds
            } = fields

            const data = {
                ...fields,
                seenBy: [],
                assignedTo:
                    assignedToIds && assignedToIds.map(item => ({ id: item })),
                createdBy: {
                    id: createdById
                },
                categories:
                    categoriesIds && categoriesIds.map(item => ({ id: item }))
            }

            if (item && item.id) {
                await updateNotice({
                    variables: {
                        data: {
                            ...data,
                            categories: [
                                {
                                    id: "ck257vhfy0001xs1olg6ed51u",
                                    name: "Prevenção"
                                }
                            ]
                        },
                        where: {
                            id: item.id
                        }
                    }
                })
            } else {
                await createNotice({
                    variables: {
                        data
                    }
                })
            }
        } catch {}
    }

    return (
        <CBMCrud
            addButtonLabel='Adicionar aviso'
            loadingOnCreateOrUpdate={loadingUpdate || loadingCreate}
            form={form}
            onSubmit={onSubmit}
            onDelete={onDelete}
            onEdit={onEdit}
            AboutDrawerProps={{
                children: item && <ScgNoticesAbout item={item} />,
                visible: showAbout,
                onClose: () => {
                    setShowAbout(false)
                    setItem()
                },
                Actions: item && (
                    <CBMButton
                        onClick={() => onSeen(item)}
                        icon={item.read ? "eye" : "eye-invisible"}
                        shape='round'
                        type='warning'
                        ghost={item.read}
                        loading={loadingOnSeen}
                    />
                ),
                loadingDelete
            }}
            FormDrawerProps={{
                visible: showForm,
                onClose: () => setShowForm(false),
                onOpen: () => setShowForm(true),
                children: (
                    <ScgNoticesForm
                        defaultValues={item}
                        getFieldDecorator={getFieldDecorator}
                    />
                )
            }}
        >
            <ScgNoticesList onClick={onListClick} />
        </CBMCrud>
    )
}

export default withCBMForm(withRouter(ScgNotices))
