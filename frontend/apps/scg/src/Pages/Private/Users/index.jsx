import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom"

import { withCBMForm } from "@cbmsc/components/dist/Components/Molecules/Form"
import { CBMCrud } from "@cbmsc/components/dist/Components/Templates/Crud"
import ScgUsersList from "./List"
import ScgUsersForm from "./Form"
import { useMutation } from "@apollo/react-hooks"
import { CREATE_USER } from "GraphQL/Users/Mutations/create"
import { useAuthContext } from "Hooks/Auth"
import { UPDATE_USER } from "GraphQL/Users/Mutations/update"
import { updateUserCacheOnCreate } from "./Cache/create"
import { updateUserCacheOnUpdate } from "./Cache/update"
import { useLayoutContext } from "Pages/Layout/Context"

const routes = [
    {
        path: "/",
        breadcrumbName: "Home"
    },
    {
        path: "/usuarios",
        breadcrumbName: "Usuários"
    }
]

const ScgUsers = ({ form, history }) => {
    const [showForm, setShowForm] = useState(false)
    const [item, setItem] = useState(false)
    const { me } = useAuthContext()

    const { setHeaderInfo } = useLayoutContext()

    useEffect(() => {
        setHeaderInfo({
            onBack: () => history.push("/inicio"),
            title: "Usuários",
            breadcrumb: { routes }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { getFieldDecorator, getFieldsValue } = form

    const [createUser, { loading: loadingCreate }] = useMutation(CREATE_USER, {
        onCompleted: () => {
            onCloseForm()
        },
        update: updateUserCacheOnCreate
    })

    const [updateUser, { loading: loadingUpdate }] = useMutation(UPDATE_USER, {
        onCompleted: () => {
            onCloseForm()
        },
        update: updateUserCacheOnUpdate
    })

    const onSubmit = async () => {
        try {
            if (!item) {
                await createUser({
                    variables: {
                        data: {
                            ...getFieldsValue(),
                            fireStation: me.fireStation
                        }
                    }
                })
            } else {
                await updateUser({
                    variables: {
                        data: {
                            id: item.id,
                            ...getFieldsValue()
                        }
                    }
                })
            }
        } catch {}
    }

    const onListItemClick = item => {
        setItem(item)
        setShowForm(true)
    }

    const onCloseForm = () => {
        setShowForm(false)
        setItem()
    }

    return (
        <CBMCrud
            addButtonLabel='Adicionar usuário'
            loadingOnCreateOrUpdate={loadingUpdate || loadingCreate}
            form={form}
            onSubmit={onSubmit}
            FormDrawerProps={{
                visible: showForm,
                onClose: () => setShowForm(false),
                onOpen: () => setShowForm(true),
                children: (
                    <ScgUsersForm
                        defaultValues={item}
                        getFieldDecorator={getFieldDecorator}
                    />
                )
            }}
        >
            <ScgUsersList setItem={setItem} onClick={onListItemClick} />
        </CBMCrud>
    )
}

export default withCBMForm(withRouter(ScgUsers))
