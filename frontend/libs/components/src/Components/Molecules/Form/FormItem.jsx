import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { Form } from 'antd'

import withCBMForm from './withForm'

const CBMFormItem = forwardRef(({ children, name, form, ...props }, ref) => {
    const { getFieldDecorator } = form

    return (
        <Form.Item {...props} ref={ref}>
            {getFieldDecorator && name
                ? getFieldDecorator(name, props)(children)
                : children}
        </Form.Item>
    )
})

CBMFormItem.propTypes = Object.assign(
    {
        ...Form.Item['propTypes']
    },
    {}
)

CBMFormItem.defaultProps = {}

export default withCBMForm(CBMFormItem)
