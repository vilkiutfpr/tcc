import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"

import { useLayoutContext } from "Pages/Layout/Context"
import { CBMCalendar } from "@cbmsc/components/dist/Components/Molecules/Calendar"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { GET_APPOINTMENTS } from "GraphQL/AppointmentsBC/Queries/appointments"
import { CBMCrud } from "@cbmsc/components/dist/Components/Templates/Crud"
import { withCBMForm } from "@cbmsc/components/dist/Components/Molecules/Form"

import ScgBCAppointmentsAbout from "./About"
import ScgBCAppointmentsForm from "./Form"
import { CREATE_APPOINTMENT } from "GraphQL/AppointmentsBC/Mutations/create"
import { updateAppointmentCacheOnCreate } from "./Cache/create"
import { updateAppointmentCacheOnDelete } from "./Cache/delete"
import { updateAppointmentCacheOnUpdate } from "./Cache/update"
import { DELETE_APPOINTMENT } from "GraphQL/AppointmentsBC/Mutations/delete"
import { message, Tooltip } from "antd"
import { UPDATE_APPOINTMENT } from "GraphQL/AppointmentsBC/Mutations/update"
import { CBMDatePicker } from "@cbmsc/components/dist/Components/Atoms/DatePicker"

import moment from "@cbmsc/utils/dist/Moment"
import { CBMButton } from "@cbmsc/components/dist/Components/Atoms/Button"
import { BILL_APPOINTMENT } from "GraphQL/AppointmentsBC/Mutations/bill"

const routes = [
    {
        path: "/",
        breadcrumbName: "Home"
    },
    {
        path: "/agenda-bc",
        breadcrumbName: "Agenda BCs"
    }
]

const ScgBCAppointments = ({ history, form }) => {
    const { setHeaderInfo } = useLayoutContext()
    const [aboutDrawerShow, setAboutDrawerShow] = useState(false)
    const [formDrawerShow, setFormDrawerShow] = useState(false)
    const [item, setItem] = useState()
    const [currentDate, setCurrentDate] = useState(new Date())

    const { getFieldDecorator, resetFields } = form

    const { data, loading } = useQuery(GET_APPOINTMENTS, {
        variables: { date: moment(currentDate).format("YYYY-MM-DD") }
    })

    useEffect(() => {
        setHeaderInfo({
            onBack: () => history.push("/inicio"),
            title: "Agenda BCs",
            breadcrumb: { routes }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSelectEvent = item => {
        setItem(item)
        setAboutDrawerShow(true)
    }

    const [createAppointment, { loading: createLoading }] = useMutation(
        CREATE_APPOINTMENT,
        {
            update: (cache, data) =>
                updateAppointmentCacheOnCreate(cache, data, currentDate)
        }
    )

    const [updateAppointment, { loading: updateLoading }] = useMutation(
        UPDATE_APPOINTMENT,
        {
            update: (cache, data) =>
                updateAppointmentCacheOnUpdate(cache, data, currentDate)
        }
    )

    const cacheBill = (cache, data) => {
        let dataToUpdateCache = {
            data: {
                updateAppointment: data.data.billAppointment
            }
        }

        updateAppointmentCacheOnUpdate(cache, dataToUpdateCache, currentDate)
    }

    const [billAppointment, { loading: billLoading }] = useMutation(
        BILL_APPOINTMENT,
        {
            update: cacheBill
        }
    )

    const [deleteAppointment, { loading: loadingDelete }] = useMutation(
        DELETE_APPOINTMENT,
        {
            update: (cache, data) =>
                updateAppointmentCacheOnDelete(cache, data, currentDate)
        }
    )

    const onSubmit = async fields => {
        const data = {
            ...fields,
            ...(fields.start && {
                start: moment(fields.start).format("YYYY-MM-DD HH:mm")
            }),
            ...(fields.start && {
                end: moment(fields.end).format("YYYY-MM-DD HH:mm")
            }),
            ...(fields.user && {
                user: { id: fields.user }
            })
        }

        try {
            if (!item) {
                await createAppointment({ variables: { data } })
                setFormDrawerShow(false)
                message.success("Registro criado com sucesso!")

                return true
            }

            await updateAppointment({
                variables: { data, where: { id: item.id } }
            })
            setFormDrawerShow(false)
            setAboutDrawerShow(false)
            setItem()
            resetFields()
            message.success("Registro atualizado com sucesso!")
        } catch {}
    }

    const onEdit = () => {
        setFormDrawerShow(true)
    }

    const onDelete = async () => {
        try {
            await deleteAppointment({ variables: { where: { id: item.id } } })
            setAboutDrawerShow(false)
            message.success("Registro apagado com sucesso!")
        } catch {}
    }

    const onBillAppointment = async () => {
        try {
            await billAppointment({
                variables: {
                    billed: !item.billed,
                    where: {
                        id: item.id
                    }
                }
            })
            message.success("Registro contabilizado com sucesso!")
            setAboutDrawerShow(false)
            setItem()
        } catch {}
    }

    return (
        <>
            <CBMCrud
                addButtonLabel='Adicionar agendamento'
                loadingOnCreateOrUpdate={createLoading || updateLoading}
                form={form}
                onSubmit={onSubmit}
                onDelete={onDelete}
                onEdit={onEdit}
                AboutDrawerProps={{
                    children: item && <ScgBCAppointmentsAbout item={item} />,
                    visible: aboutDrawerShow,
                    width: 350,
                    onClose: () => {
                        setAboutDrawerShow(false)
                    },
                    Actions: item && (
                        <>
                            <Tooltip placement='top' title='Contabilizar horas'>
                                <CBMButton
                                    loading={billLoading}
                                    onClick={onBillAppointment}
                                    icon='check'
                                    shape='round'
                                    type={
                                        (item.billed && "success") || "default"
                                    }
                                />
                            </Tooltip>
                        </>
                    ),
                    loadingDelete
                }}
                FormDrawerProps={{
                    visible: formDrawerShow,
                    onClose: () => setFormDrawerShow(false),
                    onOpen: () => setFormDrawerShow(true),
                    children: (
                        <ScgBCAppointmentsForm
                            defaultValues={item}
                            getFieldDecorator={getFieldDecorator}
                        />
                    )
                }}
                Actions={
                    <CBMDatePicker
                        onChange={date => setCurrentDate(new Date(date))}
                        size='large'
                        value={moment(currentDate)}
                        fullWidth={false}
                        placeholder='Data'
                        format='DD/MM/YYYY HH:mm'
                        showTime
                    />
                }
            >
                <CBMCalendar
                    loading={loading}
                    date={currentDate}
                    onNavigate={date => {
                        setCurrentDate(date)
                    }}
                    onSelectEvent={onSelectEvent}
                    events={
                        (data &&
                            data.appointmentsPerDate.map(item => ({
                                ...item,
                                start: new Date(item.start),
                                end: new Date(item.end),
                                title: item.user.name
                            }))) ||
                        []
                    }
                />
            </CBMCrud>
        </>
    )
}

export default withCBMForm(withRouter(ScgBCAppointments))
