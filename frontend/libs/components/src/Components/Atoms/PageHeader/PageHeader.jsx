import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { PageHeader } from 'antd';

const CBMPageHeader = ({ className, ...props }) => {
	const classes = classNames('cbm-page-header', className);
	return <PageHeader className={classes} {...props} />;
};

CBMPageHeader.propTypes = Object.assign(
	{ ...PageHeader['propTypes'] },
	{
		className: PropTypes.string
	}
);

CBMPageHeader.defaultProps = {};

export default CBMPageHeader;
