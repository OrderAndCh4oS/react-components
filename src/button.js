import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({className = '', iconLeft = null, iconRight = null, children, ...rest}) => (
    <button className={['button', className].join(' ')} {...rest}>
        {iconLeft ? <span className='button--icon-left'>{iconLeft}</span> : null}
        {children}
        {iconRight ? <span className='button--icon-right'>{iconRight}</span> : null}
    </button>
);

Button.propTypes = {
    type: PropTypes.string,
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element,
    className: PropTypes.string,
    children: PropTypes.string.isRequired
};
