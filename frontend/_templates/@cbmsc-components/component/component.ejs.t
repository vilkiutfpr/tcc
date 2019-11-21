---
to: libs/components/src/Components/<%=h.inflection.pluralize(category)%>/<%=h.inflection.camelize(name)%>/<%=h.inflection.camelize(name)%>.jsx
---
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const CBM<%=h.inflection.camelize(name)%> = ({ className, ...props }) => {
    const classes = classNames('cbm-<%=h.changeCase.param( name ) %>', className)
    return (
        <div className={classes} {...props} />
    )
}

CBM<%=h.inflection.camelize(name)%>.propTypes = {
    className: PropTypes.string
}
CBM<%=h.inflection.camelize(name)%>.defaultProps = {}

export default CBM<%=h.inflection.camelize(name)%>