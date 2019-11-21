import React from "react"
import moment from "@cbmsc/utils/dist/Moment"

import {
    CBMFormItem,
    withCBMForm,
    CBMForm
} from "@cbmsc/components/dist/Components/Molecules/Form"
import { CBMDatePicker } from "@cbmsc/components/dist/Components/Atoms/DatePicker"
import { Select, message } from "antd"
import { CBMSelect } from "@cbmsc/components/dist/Components/Atoms/Select"
import { useAuthContext } from "Hooks/Auth"
import { CBMButton } from "@cbmsc/components/dist/Components/Atoms/Button"
import { CBMBox } from "@cbmsc/components/dist/Components/Atoms/Box"
import { useMutation } from "@apollo/react-hooks"
import { CREATE_APPOINTMENT } from "GraphQL/Appointments/Mutations/create"
import { UPDATE_APPOINTMENT } from "GraphQL/Appointments/Mutations/update"
import { GET_APPOINTMENTS } from "GraphQL/Appointments/Queries/appointments"

const SbcAppointmentsForm = ({ defaultValues, form, filter, onClose }) => {
    const { getFieldDecorator, getFieldsValue } = form
    const { me } = useAuthContext()

    const [createAppointment, { loading: createLoading }] = useMutation(
        CREATE_APPOINTMENT,
        {
            refetchQueries: [
                {
                    query: GET_APPOINTMENTS,
                    variables: {
                        where: {
                            start: moment(filter.start).format("YYYY-MM-DD"),
                            end: moment(filter.end).format("YYYY-MM-DD"),
                            user: { role: "BC" }
                        }
                    }
                }
            ],
            onCompleted: () => {
                message.success("Agendamento cadastrado com sucesso!")
                onClose()
            }
        }
    )

    const [updateAppointment, { loading: updateLoading }] = useMutation(
        UPDATE_APPOINTMENT,
        {
            refetchQueries: [
                {
                    query: GET_APPOINTMENTS,
                    variables: {
                        where: {
                            start: moment(filter.start).format("YYYY-MM-DD"),
                            end: moment(filter.end).format("YYYY-MM-DD"),
                            user: { role: "BC" }
                        }
                    }
                }
            ],
            onCompleted: () => {
                message.success("Agendamento atualizado com sucesso!")
                onClose()
            }
        }
    )

    const onSubmit = e => {
        e.preventDefault()

        const { user, start, end } = getFieldsValue()

        if (!defaultValues.id) {
            createAppointment({
                variables: {
                    data: {
                        start: moment(start).format("YYYY-MM-DD HH:mm"),
                        end: moment(end).format("YYYY-MM-DD HH:mm"),
                        user: { id: user }
                    }
                }
            })
        } else {
            updateAppointment({
                variables: {
                    data: {
                        start: moment(start).format("YYYY-MM-DD HH:mm"),
                        end: moment(end).format("YYYY-MM-DD HH:mm"),
                        user: { id: user }
                    },
                    where: { id: defaultValues.id }
                }
            })
        }
    }

    return (
        <CBMForm onSubmit={onSubmit}>
            <CBMBox className='mb-lg d-flex'>
                <CBMButton
                    className='mr-xs'
                    icon='save'
                    shape='round'
                    htmlType='submit'
                    type='primary'
                    block
                    loading={createLoading || updateLoading}
                >
                    Salvar
                </CBMButton>
            </CBMBox>
            <CBMFormItem>
                {getFieldDecorator("user", {
                    initialValue: me.id
                })(
                    <CBMSelect
                        disabled
                        initialValue={me.id}
                        size='large'
                        placeholder='Responável'
                    >
                        <Select.Option value={me.id}>{me.name}</Select.Option>
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
                    initialValue:
                        defaultValues &&
                        moment(
                            defaultValues.end ||
                                moment(defaultValues.end).add("day", 1)
                        ),
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
        </CBMForm>
    )
}

export default withCBMForm(SbcAppointmentsForm)
