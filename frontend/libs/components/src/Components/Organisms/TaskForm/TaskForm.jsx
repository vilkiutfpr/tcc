import React, { useEffect } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { message, Select } from "antd"
import moment from "moment"

import { CBMForm, CBMFormItem, withCBMForm } from "../../Molecules/Form"
import { CBMInput } from "../../Atoms/Input"
import { CBMTextArea } from "../../Atoms/TextArea"
import { CBMSelect } from "../../Atoms/Select"
import { CBMSwitch } from "../../Atoms/Switch"
import { CBMTypography } from "../../Atoms/Typography"
import { CBMDatePicker } from "../../Atoms/DatePicker"
import { CBMUpload } from "../../Atoms/Upload"
import { CBMBox } from "../../Atoms/Box"
import { CBMButton } from "../../Atoms/Button"
import { CBMRow, CBMCol } from "../../Atoms/Grid"

const CBMTaskForm = ({
    className,
    form,
    categories,
    defaultValues,
    responsiblesSource,
    onSave: onSaveProps,
    loading,
    ...props
}) => {
    const classes = classNames("cbm-task-form", className)
    const { getFieldDecorator, validateFields, getFieldsValue } = form

    const onChangeUpload = value => form.setFieldsValue({ document: value })

    const onSave = async e => {
        e.preventDefault()

        try {
            await validateFields()

            const {
                date,
                assignedTo: assignedToId,
                assignedBy: assignedById,
                categories: categoriesIds,
                ...fields
            } = getFieldsValue()

            const newDate = date
                ? moment(new Date(date)).format("YYYY-MM-DD HH:mm")
                : date

            onSaveProps({
                ...fields,
                date: newDate,
                assignedTo: {
                    id: assignedToId
                },
                assignedBy: {
                    id: assignedById
                },
                categories:
                    categoriesIds && categoriesIds.map(item => ({ id: item }))
            })
        } catch (e) {
            message.error(
                "Há problemas com os campos informados. Por favor verifique!"
            )
        }
    }

    return (
        <CBMForm onSubmit={e => onSave(e)} className={classes} {...props}>
            <CBMBox className='mb-lg d-flex'>
                <CBMButton
                    loading={loading}
                    className='mr-xs'
                    icon='save'
                    shape='round'
                    htmlType='submit'
                    type='primary'
                    htmlType='submit'
                    block
                >
                    Salvar
                </CBMButton>
                <CBMButton
                    className='mr-xs'
                    onClick={() => console.log}
                    icon='close'
                    shape='round'
                    htmlType='reset'
                    block
                >
                    Cancelar
                </CBMButton>
            </CBMBox>
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
                {getFieldDecorator("address", {
                    initialValue: defaultValues && defaultValues.address,
                    rules: [
                        {
                            required: true,
                            message: "Por favor, preencha o endereço."
                        }
                    ]
                })(<CBMInput size='large' placeholder='Endereço' />)}
            </CBMFormItem>
            <CBMFormItem>
                {/* TODO: Use autocomplete */}
                {/* TODO: Use as default logged user */}
                {getFieldDecorator("assignedBy", {
                    initialValue: defaultValues && defaultValues.assignedBy.id,
                    rules: [
                        {
                            required: true,
                            message: "Por favor, é necessário ter um criador."
                        }
                    ]
                })(
                    <CBMSelect size='large' placeholder='Criador'>
                        {responsiblesSource.map(item => (
                            <Select.Option key={item.id}>
                                {item.email}
                            </Select.Option>
                        ))}
                    </CBMSelect>
                )}
            </CBMFormItem>
            <CBMFormItem>
                {/* TODO: Use autocomplete */}
                {getFieldDecorator("assignedTo", {
                    initialValue: defaultValues && defaultValues.assignedTo.id,
                    rules: [
                        {
                            required: true,
                            message:
                                "Por favor, é necessário ter um responsável."
                        }
                    ]
                })(
                    <CBMSelect size='large' placeholder='Responsável'>
                        {responsiblesSource.map(item => (
                            <Select.Option key={item.id}>
                                {item.email}
                            </Select.Option>
                        ))}
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
                        mode='multiple'
                        size='large'
                        placeholder='Categorias'
                    >
                        {categories.map(category => (
                            <Select.Option key={category.id}>
                                {category.name}
                            </Select.Option>
                        ))}
                    </CBMSelect>
                )}
            </CBMFormItem>
            <CBMRow>
                <CBMCol sm={12}>
                    <CBMFormItem>
                        {getFieldDecorator("date", {
                            initialValue:
                                defaultValues && moment(defaultValues.date),
                            rules: [
                                {
                                    required: true,
                                    message:
                                        "Por favor, é necessário ter uma data."
                                }
                            ]
                        })(
                            <CBMDatePicker
                                size='large'
                                placeholder='Data'
                                format='DD/MM/YYYY HH:mm'
                                showTime
                            />
                        )}
                    </CBMFormItem>
                </CBMCol>
                <CBMCol sm={12}>
                    <CBMFormItem>
                        {/* TODO: use CBMOptionSelect */}
                        {getFieldDecorator("priority", {
                            initialValue:
                                defaultValues && defaultValues.priority,
                            rules: [
                                {
                                    required: true,
                                    message:
                                        "Por favor, é necessário ter uma prioridade."
                                }
                            ]
                        })(
                            <CBMSelect size='large' placeholder='Prioridade'>
                                <Select.Option value='HIGH'>Alto</Select.Option>
                                <Select.Option value='MEDIUM'>
                                    Médio
                                </Select.Option>
                                <Select.Option value='LOW'>Baixo</Select.Option>
                            </CBMSelect>
                        )}
                    </CBMFormItem>
                </CBMCol>
            </CBMRow>
            <CBMFormItem>
                <CBMBox className='d-flex align-items-center'>
                    {getFieldDecorator("done", {
                        initialValue: false
                    })(
                        <CBMSwitch
                            defaultChecked={defaultValues && defaultValues.done}
                            mode='multiple'
                            placeholder='Concuída'
                        />
                    )}
                    <CBMTypography className='ml-sm'>Concluída</CBMTypography>
                </CBMBox>
            </CBMFormItem>
            {defaultValues && defaultValues.document && (
                <CBMButton
                    href={defaultValues.document}
                    type='primary'
                    ghost
                    target='_blank'
                    icon='cloud-download'
                    className='mb-xl'
                >
                    Ver documento para a tarefa
                </CBMButton>
            )}
            <CBMFormItem>
                {getFieldDecorator("document")(
                    <CBMUpload
                        onChange={onChangeUpload}
                        showUploadList={false}
                    />
                )}
            </CBMFormItem>
        </CBMForm>
    )
}

CBMTaskForm.propTypes = Object.assign(
    {
        ...CBMForm["defaultProps"]
    },
    {
        loading: PropTypes.bool
    }
)
CBMTaskForm.defaultProps = {
    tags: [{ name: "I" }]
}

export default withCBMForm(CBMTaskForm)
