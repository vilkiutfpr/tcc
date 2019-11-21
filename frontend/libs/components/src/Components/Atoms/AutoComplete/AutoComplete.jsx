import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';

const CBMAutoComplete = ({ className, ...props }) => {
	const classes = classNames('cbm-auto-complete', className);
	return <AutoComplete className={classes} {...props} />;
};

CBMAutoComplete.propTypes = Object.assign(
	{ ...AutoComplete['propTypes'] },
	{
		className: PropTypes.string
	}
);

CBMAutoComplete.defaultProps = {};

export default CBMAutoComplete;
