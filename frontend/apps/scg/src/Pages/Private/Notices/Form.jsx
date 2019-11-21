import React, { useCallback } from "react"
import { CBMFormItem } from "@cbmsc/components/dist/Components/Molecules/Form"
import { CBMInput } from "@cbmsc/components/dist/Components/Atoms/Input"
import { CBMTextArea } from "@cbmsc/components/dist/Components/Atoms/TextArea"
import { useQuery } from "@apollo/react-hooks"
import { GET_USERS } from "GraphQL/Notices/Queries/users"
import { CBMSelect } from "@cbmsc/components/dist/Components/Atoms/Select"
import { Select } from "antd"
import { GET_CATEGORIES } from "GraphQL/Notices/Queries/categories"

const ScgNoticesForm = ({ defaultValues, getFieldDecorator, ...props }) => {
    const { data: dataUsers, loading: loadingUsers } = useQuery(GET_USERS, {
        variables: { where: {} },
        fetchPolicy: "network-only"
    })

    const { data: dataCategories, loading: loadingCategories } = useQuery(
        GET_CATEGORIES,
        {
            variables: { where: {} },
            fetchPolicy: "network-only"
        }
    )

    const renderUsers = useCallback(
        () =>
            dataUsers &&
            dataUsers.users.map(item => (
                <Select.Option key={item.id}>{item.email}</Select.Option>
            )),
        [dataUsers]
    )

    const renderCategories = useCallback(
        () =>
            dataCategories &&
            dataCategories.categories.map(item => (
                <Select.Option key={{ id: item.id }}>{item.name}</Select.Option>
            )),
        [dataCategories]
    )

    return (
        <>
            <CBMFormItem>
                {getFieldDecorator("title", {
                    initialValue: defaultValues && defaultValues.title,
                    rules: [
                        {
                            required: true,
                            message: "Por favor, preencha o título."
                        }
                    ]
                })(<CBMInput size='large' placeholder='Título' />)}
            </CBMFormItem>
            <CBMFormItem>
                {getFieldDecorator("description", {
                    initialValue: defaultValues && defaultValues.description,
                    rules: [
                        {
                            required: true,
                            message: "Por favor, preencha a descrição."
                        }
                    ]
                })(
                    <CBMTextArea
                        autosize={{ minRows: 3, maxRows: 5 }}
                        size='large'
                        placeholder='Descrição'
                    />
                )}
            </CBMFormItem>
            <CBMFormItem>
                {/* TODO: Use autocomplete */}
                {/* TODO: Use as default logged user */}
                {getFieldDecorator("createdBy", {
                    initialValue: defaultValues && defaultValues.createdBy.id,
                    rules: [
                        {
                            required: true,
                            message: "Por favor, é necessário ter um criador."
                        }
                    ]
                })(
                    <CBMSelect
                        loading={loadingUsers}
                        size='large'
                        placeholder='Criador'
                    >
                        {renderUsers()}
                    </CBMSelect>
                )}
            </CBMFormItem>
            <CBMFormItem>
                {/* TODO: Use autocomplete */}
                {getFieldDecorator("assignedTo", {
                    initialValue: defaultValues
                        ? defaultValues.assignedTo.map(item => item.id)
                        : [],
                    rules: [
                        {
                            required: true,
                            message:
                                "Por favor, é necessário ter pelo menos um destinatário."
                        }
                    ]
                })(
                    <CBMSelect
                        mode='multiple'
                        loading={loadingUsers}
                        size='large'
                        placeholder='Destinatários'
                    >
                        {renderUsers()}
                    </CBMSelect>
                )}
            </CBMFormItem>
            <CBMFormItem>
                {/* TODO: use CBMOptionSelect */}
                {getFieldDecorator("categories", {
                    initialValue: defaultValues
                        ? defaultValues.categories.map(item => item.id)
                        : []
                })(
                    <CBMSelect
                        loading={loadingCategories}
                        mode='multiple'
                        size='large'
                        placeholder='Categorias'
                    >
                        {renderCategories()}
                    </CBMSelect>
                )}
            </CBMFormItem>
            <CBMFormItem>
                {/* TODO: use CBMOptionSelect */}
                {getFieldDecorator("priority", {
                    initialValue: defaultValues && defaultValues.priority,
                    rules: [
                        {
                            required: true,
                            message:
                                "Por favor, é necessário ter uma prioridade."
                        }
                    ]
                })(
                    <CBMSelect
                        loading={loadingCategories}
                        size='large'
                        placeholder='Prioridade'
                    >
                        <Select.Option value='HIGH'>Alto</Select.Option>
                        <Select.Option value='MEDIUM'>Médio</Select.Option>
                        <Select.Option value='LOW'>Baixo</Select.Option>
                    </CBMSelect>
                )}
            </CBMFormItem>
        </>
    )
}

export default ScgNoticesForm
