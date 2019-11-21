import React from 'react'
import { storiesOf } from '@storybook/react'
import CBMForm from './Form'
import CBMFormItem from './FormItem'
import withCBMForm from './withForm'
import CBMInput from '../../Atoms/Input/Input'
import CBMButton from '../../Atoms/Button/Button'

const Form = withCBMForm(({ form }) => {
    const { getFieldDecorator } = form

    return (
        <CBMForm style={{ width: 320 }} onSubmit={e => signIn(e)}>
            <CBMFormItem>
                {getFieldDecorator('username', {
                    rules: [{ required: true }]
                })(<CBMInput size='large' placeholder='Usuário' />)}
            </CBMFormItem>

            <CBMFormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true }]
                })(
                    <CBMInput
                        size='large'
                        type='password'
                        placeholder='Senha'
                    />
                )}
            </CBMFormItem>
            <CBMButton
                htmlType='submit'
                block
                type='secondary'
                className='mb-lg'
            >
                Acessar o sistema
            </CBMButton>
            <CBMButton block ghost type='primary'>
                Esqueci minha senha
            </CBMButton>
        </CBMForm>
    )
})

Form.propTypes = CBMForm['propTypes']

storiesOf('Molecules.Form', module).add('Simple', () => <Form />)
