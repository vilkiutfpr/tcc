import React, { useCallback } from "react"
import moment from "moment"

import { CBMFormItem } from "@cbmsc/components/dist/Components/Molecules/Form"
import { CBMDatePicker } from "@cbmsc/components/dist/Components/Atoms/DatePicker"
import { GET_USERS } from "GraphQL/AppointmentsBC/Queries/users"
import { Select } from "antd"
import { CBMSelect } from "@cbmsc/components/dist/Components/Atoms/Select"
import { useQuery } from "@apollo/react-hooks"

const ScgBCAppointmentsForm = ({ getFieldDecorator, defaultValues }) => {
    const { data: dataUsers, loadingUsers } = useQuery(GET_USERS)

    const renderUsers = useCallback(
        () =>
            dataUsers &&
            dataUsers.users.map(item => (
                <Select.Option key={item.id}>{item.email}</Select.Option>
            )),
        [dataUsers]
    )

    return (
        <>
            <CBMFormItem>
                {/* TODO: Use autocomplete */}
                {/* TODO: Use as default logged user */}
                {getFieldDecorator("user", {
                    initialValue: defaultValues && defaultValues.user.id,
                    rules: [
                        {
                            required: true,
                            message: "Por favor, é necessário ter um usuário."
                        }
                    ]
                })(
                    <CBMSelect
                        loading={loadingUsers}
                        size='large'
                        placeholder='Destinatários'
                    >
                        {renderUsers()}
                    </CBMSelect>
                )}
            </CBMFormItem>
            <CBMFormItem>
                {getFieldDecorator("start", {
                    initialValue: defaultValues && moment(defaultValues.start),
                    rules: [
                        {
                            required: true,
                            message: "Por favor, é necessário ter uma data."
                        }
                    ]
                })(
                    <CBMDatePicker
                        size='large'
                        placeholder='Início'
                        format='DD/MM/YYYY HH:mm'
                        showTime
                    />
                )}
            </CBMFormItem>
            <CBMFormItem>
                {getFieldDecorator("end", {
                    initialValue: defaultValues && moment(defaultValues.end),
                    rules: [
                        {
                            required: true,
                            message: "Por favor, é necessário ter uma data."
                        }
                    ]
                })(
                    <CBMDatePicker
                        size='large'
                        placeholder='Fim'
                        format='DD/MM/YYYY HH:mm'
                        showTime
                    />
                )}
            </CBMFormItem>
        </>
    )
}

export default ScgBCAppointmentsForm
