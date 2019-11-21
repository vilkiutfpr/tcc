import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'

const CBMRow = ({ ...props }) => <Row {...props} />

CBMRow.propTypes = Row['propTypes']

export default CBMRow
