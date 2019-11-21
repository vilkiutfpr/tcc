import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import { CBMBox } from "../../Atoms/Box"
import { CBMButton } from "../../Atoms/Button"
import { CBMDrawer } from "../../Atoms/Drawer"
import { CBMForm } from "../../Molecules/Form"
import { message } from "antd"

const CBMCrud = ({
    className,
    AboutDrawerProps,
    FormDrawerProps,
    addButtonLabel,
    Actions,
    onEdit,
    onDelete,
    children,
    loadingOnCreateOrUpdate,
    onSubmit: onSubmitProp,
    form
}) => {
    const classes = classNames("cbm-crud", className)
    const { getFieldsValue, validateFields } = form

    const onSubmit = async e => {
        e.preventDefault()

        try {
            await validateFields()
            onSubmitProp({ ...getFieldsValue() })
        } catch (e) {
            message.error("Por favor, verifique os campos!")
        }
    }

    const { loadingDelete, ...AboutDrawer } = AboutDrawerProps || {}

    const { onOpen: onOpenForm, ...FormDrawer } = FormDrawerProps

    return (
        <CBMBox className={classes}>
            <CBMBox className='cbm-crud__actions mb-xl'>
                <CBMButton
                    type='secondary'
                    className='mr-sm'
                    icon='plus'
                    onClick={() => onOpenForm(true)}
                >
                    {addButtonLabel}
                </CBMButton>
                {Actions}
            </CBMBox>
            {children}

            {AboutDrawerProps && (
                <CBMDrawer
                    zIndex={3}
                    width='300'
                    {...AboutDrawer}
                    Actions={
                        <>
                            <CBMButton
                                loading={loadingDelete}
                                onClick={onDelete}
                                icon='delete'
                                shape='round'
                                type='danger'
                                className='mr-xs'
                                ghost
                            />
                            {AboutDrawer.Actions}
                            {onEdit && (
                                <CBMButton
                                    onClick={onEdit}
                                    icon='edit'
                                    shape='round'
                                    type='primary'
                                    className='ml-xs'
                                    ghost
                                />
                            )}
                        </>
                    }
                />
            )}

            <CBMDrawer width='500' zIndex={4} {...FormDrawer}>
                <CBMForm onSubmit={onSubmit}>
                    <CBMBox className='mb-lg d-flex'>
                        <CBMButton
                            loading={loadingOnCreateOrUpdate}
                            className='mr-xs'
                            icon='save'
                            shape='round'
                            htmlType='submit'
                            type='primary'
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
                    {FormDrawer.children}
                </CBMForm>
            </CBMDrawer>
        </CBMBox>
    )
}

CBMCrud.propTypes = {
    className: PropTypes.string,
    openForm: PropTypes.bool,
    onOpenForm: PropTypes.func,
    onOpenAbout: PropTypes.func,
    openAbout: PropTypes.bool,
    addButtonLabel: PropTypes.string,
    AboutDrawerProps: PropTypes.object,
    loadingDelete: PropTypes.bool
}
CBMCrud.defaultProps = {}

export default CBMCrud
