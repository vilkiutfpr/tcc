import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CBMNavListItem } from '../NavListItem';
import CBMBadge from '../Badge/Badge';
import CBMTypography from '../Typography/Typography';
import {CBMBox} from '../Box';

const CBMContingentListItem = ({ className, count, title, description, ...props }) => {
	const classes = classNames('cbm-contingent-list-item', className);
	return (
		<CBMNavListItem className={classes} {...props}>
			<CBMBadge className="mr-sm mt-xxs" Component="div" rounded value={count} />
			<CBMBox>
				<CBMTypography variant="body">{title}</CBMTypography>
				<CBMTypography variant="overline">{description}</CBMTypography>
			</CBMBox>
		</CBMNavListItem>
	);
};

CBMContingentListItem.propTypes = {
	className: PropTypes.string,
	count: PropTypes.number,
	title: PropTypes.string,
	description: PropTypes.string
};
CBMContingentListItem.defaultProps = {};

export default CBMContingentListItem;
