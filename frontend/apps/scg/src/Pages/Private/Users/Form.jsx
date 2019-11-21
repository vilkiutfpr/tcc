import React from "react"
import { CBMFormItem } from "@cbmsc/components/dist/Components/Molecules/Form"
import { CBMInput } from "@cbmsc/components/dist/Components/Atoms/Input"
import { CBMSelect } from "@cbmsc/components/dist/Components/Atoms/Select"
import { Select } from "antd"

const ScgUsersForm = ({ getFieldDecorator, defaultValues }) => (
    <>
        <CBMFormItem>
            {getFieldDecorator("name", {
                initialValue: (defaultValues && defaultValues.name) || null,
                rules: [
                    {
                        required: true,
                        message: "Por favor, preencha o título."
                    }
                ]
            })(<CBMInput size='large' placeholder='Nome' />)}
        </CBMFormItem>
        <CBMFormItem>
            {getFieldDecorator("email", {
                initialValue: (defaultValues && defaultValues.email) || null,
                whitespace: true,
                rules: [
                    {
                        required: true,
                        message: "Por favor, preencha seu e-mail."
                    },
                    {
                        type: "email",
                        message: "Por favor, insira um e-mail válido."
                    }
                ]
            })(<CBMInput size='large' placeholder='E-mail' />)}
        </CBMFormItem>
        <CBMFormItem>
            {getFieldDecorator("password", {
                whitespace: true,
                rules: [
                    {
                        required: !defaultValues,
                        message: "Por favor, preencha sua senha."
                    }
                ]
            })(<CBMInput size='large' type='password' placeholder='Senha' />)}
        </CBMFormItem>
        <CBMFormItem>
            {/* TODO: use CBMOptionSelect */}
            {getFieldDecorator("role", {
                initialValue: (defaultValues && defaultValues.role) || null,
                rules: [
                    {
                        required: true,
                        message: "Por favor, é necessário ter um perfil."
                    }
                ]
            })(
                <CBMSelect size='large' placeholder='Perfil do usuário'>
                    <Select.Option value='ADM'>Administrador</Select.Option>
                    <Select.Option value='BM'>Bombeiro Militar</Select.Option>
                    <Select.Option value='BC'>
                        Bombeiro Voluntário
                    </Select.Option>
                </CBMSelect>
            )}
        </CBMFormItem>
    </>
)

export default ScgUsersForm
