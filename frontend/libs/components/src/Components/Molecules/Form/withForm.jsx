import React from 'react'
import { Form } from 'antd'

const withCBMForm = (component, options = {}) => {
    const defaultOptions = {
        validateMessages: 'Campo inválido. Por favor verifique!'
    }

    if (typeof options === 'function') {
        options = options(defaultOptions)
    }

    return Form.create({
        ...defaultOptions,
        ...options
    })(component)
}

export default withCBMForm
