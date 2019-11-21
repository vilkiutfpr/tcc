import React from 'react'
import classNames from 'classnames'
import { Form } from 'antd'
import withCBMForm from './withForm'

const CBMForm = ({ className, form, ...props }) => {
    const classes = classNames(className, 'cbm-form')
    return <Form className={classes} {...props} />
}

CBMForm.propTypes = Object.assign(
    {
        ...Form['propTypes']
    },
    {}
)
CBMForm.defaultProps = {}

export default withCBMForm(CBMForm)
