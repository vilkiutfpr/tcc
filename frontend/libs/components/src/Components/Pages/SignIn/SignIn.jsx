import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import Div100vh from "react-div-100vh"

import { message } from "antd"

import CBMInput from "../../Atoms/Input/Input"
import CBMButton from "../../Atoms/Button/Button"
import CBMTypography from "../../Atoms/Typography/Typography"
import { CBMRow, CBMCol } from "../../Atoms/Grid"
import { CBMForm, CBMFormItem, withCBMForm } from "../../Molecules/Form"
import { CBMBox } from "../../Atoms/Box"

import logo from "../../../Assets/cbmsc.png"
import background from "../../../Assets/background-auth.jpg"

const CBMSignIn = ({
    className,
    logo,
    form,
    onSubmit,
    appName,
    loading,
    ...props
}) => {
    const classes = classNames("cbm-sign-in-page", className)

    const { getFieldDecorator, validateFields, getFieldsValue } = form

    const signIn = async e => {
        e.preventDefault()

        try {
            await validateFields()
            const { email, password } = getFieldsValue()
            onSubmit({ email, password })
        } catch (e) {
            message.error(
                "Há problemas com os campos informados. Por favor verifique!"
            )
        }
    }

    return (
        <Div100vh>
            <CBMRow className={classes} {...props}>
                <CBMCol xs={24} lg={8} className='cbm-sign-in-page__container'>
                    <CBMBox className='cbm-sign-in-page__container--header'>
                        <CBMTypography level={1}>CBMSC</CBMTypography>
                        <CBMTypography level={3}>{appName}</CBMTypography>
                    </CBMBox>
                    <CBMForm onSubmit={e => signIn(e)}>
                        <CBMBox className='cbm-sign-in-page__container__fields'>
                            <CBMFormItem>
                                {getFieldDecorator("email", {
                                    whitespace: true,
                                    rules: [
                                        {
                                            required: true,
                                            message:
                                                "Por favor, preencha seu e-mail."
                                        },
                                        {
                                            type: "email",
                                            message:
                                                "Por favor, insira um e-mail válido."
                                        }
                                    ]
                                })(
                                    <CBMInput
                                        disabled={loading}
                                        size='large'
                                        placeholder='E-mail'
                                    />
                                )}
                            </CBMFormItem>

                            <CBMFormItem>
                                {getFieldDecorator("password", {
                                    whitespace: true,
                                    rules: [
                                        {
                                            required: true,
                                            message:
                                                "Por favor, preencha sua senha."
                                        }
                                    ]
                                })(
                                    <CBMInput
                                        disabled={loading}
                                        size='large'
                                        type='password'
                                        placeholder='Senha'
                                    />
                                )}
                            </CBMFormItem>
                        </CBMBox>
                        <CBMBox className='cbm-sign-in-page__container__buttons'>
                            <CBMButton
                                loading={loading}
                                htmlType='submit'
                                block
                                type='secondary'
                            >
                                Acessar o sistema
                            </CBMButton>
                            {/* TODO: Create recovery password */}
                            {/* <CBMButton block ghost type='primary'>
                            Esqueci minha senha
                        </CBMButton> */}
                        </CBMBox>
                    </CBMForm>
                </CBMCol>
                <CBMCol className='cbm-sign-in-page__infos' xs={0} lg={16}>
                    <img src={logo} alt='cmbsc-logo' />
                    <CBMTypography italic regular align='center' level={3}>
                        "Vidas Alheias e Riquezas a Salvar"
                    </CBMTypography>
                    <span style={{ backgroundImage: `url(${background})` }} />
                </CBMCol>
                <span
                    className='cbm-sign-in-page--logo'
                    style={{ backgroundImage: `url(${logo})` }}
                />
            </CBMRow>
        </Div100vh>
    )
}

CBMSignIn.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
    appName: PropTypes.string,
    onSubmit: PropTypes.func
}
CBMSignIn.defaultProps = {
    logo,
    onSubmit: console.log,
    appName: "Sistema CBMSC"
}

export default withCBMForm(CBMSignIn)
