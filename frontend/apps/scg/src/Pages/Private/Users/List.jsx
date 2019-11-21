import React, { useCallback } from "react"
import {
    CBMList,
    CBMListItemMeta,
    CBMListItem
} from "@cbmsc/components/dist/Components/Atoms/List"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { GET_USERS } from "GraphQL/Users/Queries/users"
import { CBMBadge } from "@cbmsc/components/dist/Components/Atoms/Badge"
import { CBMBox } from "@cbmsc/components/dist/Components/Atoms/Box"
import { CBMButton } from "@cbmsc/components/dist/Components/Atoms/Button"
import { Modal, message } from "antd"
import { updateUserCacheOnDelete } from "./Cache/delete"
import { DELETE_USER } from "GraphQL/Users/Mutations/delete"
import { useAuthContext } from "Hooks/Auth"

const ScgUsersList = ({ onClick }) => {
    const { data, loading } = useQuery(GET_USERS)
    const { me } = useAuthContext()
    const [deleteUser] = useMutation(DELETE_USER, {
        update: updateUserCacheOnDelete,
        onCompleted: () => message.success("Usuário excluído!")
    })

    const onDelete = (item, e) => {
        e.stopPropagation()

        Modal.warn({
            title: "Você tem certeza que quer excluír esse usuário?",
            icon: "delete",
            centered: true,
            maskClosable: true,
            okButtonProps: { type: "danger" },
            okText: "Excluir",
            onOk: async () => {
                try {
                    await deleteUser({ variables: { where: { id: item.id } } })
                } catch {
                    message.error("Ocorreu um erro ao excluír este usuário!")
                    Modal.destroyAll()
                }
            }
        })
    }

    const renderListItems = useCallback(
        item => {
            return (
                <CBMListItem
                    onClick={() => onClick(item)}
                    extra={
                        <>
                            {me.id !== item.id && (
                                <CBMButton
                                    className='mr-xs'
                                    onClick={e => onDelete(item, e)}
                                    icon='delete'
                                    shape='round'
                                    type='danger'
                                    ghost
                                />
                            )}
                            <CBMButton
                                onClick={onClick}
                                icon='edit'
                                shape='round'
                                type='primary'
                                ghost
                            />
                        </>
                    }
                >
                    {/* TODO: Add user avatar */}
                    <CBMListItemMeta
                        key={item.id}
                        title={item.name}
                        description={
                            <CBMBox className='d-flex align-items-center'>
                                <CBMBadge
                                    size='small'
                                    rounded
                                    color='danger'
                                    value={
                                        item.role === "ADM" ? "AD" : item.role
                                    }
                                />
                                {item.email}
                            </CBMBox>
                        }
                    />
                </CBMListItem>
            )
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data, me]
    )

    return (
        <CBMList
            dataSource={data && data.users}
            renderItem={renderListItems}
            loading={loading}
        />
    )
}

export default ScgUsersList
