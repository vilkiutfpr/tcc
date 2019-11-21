import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import { CBMBox } from '../Box';

const ResponsiveLinesEllipsis = responsiveHOC(0)(LinesEllipsis);

const SeeMoreOrLess = ({ onClick, indicator, ellipsed }) => {
	return (
		<span onClick={onClick}>
			{indicator || (
				<span className="es-typography--ellipsis-action">{ellipsed ? `...Ver mais}` : 'Ver menos'}</span>
			)}
		</span>
	);
};

const CBMTypography = ({
	className,
	align,
	level,
	variant,
	regular,
	strong,
	ellipsis,
	children,
	italic,
	component,
	type,
	...props
}) => {
	const [ ellipsed, setEllipsed ] = useState(ellipsis && typeof ellipsis === 'object');

	const classes = classNames('cbm-typography', className, {
		[`cbm-typography--${variant}`]: variant,
		'cbm-typography--center': align === 'center',
		'cbm-typography--strong': strong,
		[`cbm-typography--${type}`]: type,
		'cbm-typography--italic': italic,
		'cbm-typography--regular': regular,
		'cbm-typography--ellipsis': ellipsis && typeof ellipsis !== 'object',
		[`cbm-typography__heading cbm-typography__heading--h${level}`]: level && level !== ''
	});

	const configureEllipsed = () => {
		setEllipsed((old) => !old);
	};

	// It'll render a paragraph with ellipsis
	if (typeof ellipsis === 'object' && ellipsed) {
		return (
			<ResponsiveLinesEllipsis
				text={children}
				maxLine={ellipsis.rows ? ellipsis.rows : 2}
				basedOn={ellipsis.basedOn}
				ellipsis={
					ellipsis.showAction && (
						<SeeMoreOrLess onClick={configureEllipsed} indicator={ellipsis.indicatorMore} ellipsed />
					)
				}
				className={classes}
				{...props}
			/>
		);
	}

	const Component = component ? component : 'div';
	return (
		<Component className={classes} {...props}>
			{children}
			{typeof ellipsis === 'object' &&
			ellipsis.showAction && (
				<CBMBox>
					<SeeMoreOrLess onClick={configureEllipsed} indicator={ellipsis.indicatorLess} ellipsed={false} />
				</CBMBox>
			)}
		</Component>
	);
};

CBMTypography.propTypes = {
	className: PropTypes.string,
	align: PropTypes.oneOf([ 'center' ]),
	component: PropTypes.string,
	level: PropTypes.oneOf([ 1, 2, 3, 4, 5, 6 ]),
	regular: PropTypes.bool,
	strong: PropTypes.bool,
	ellipsis: PropTypes.bool,
	italic: PropTypes.bool,
	component: PropTypes.string,
	variant: PropTypes.oneOf([ 'subtitle', 'body', 'caption', 'sub-caption', 'overline' ]),
	type: PropTypes.oneOf([ 'success', 'danger' ])
};
CBMTypography.defaultProps = {};

export default CBMTypography;
