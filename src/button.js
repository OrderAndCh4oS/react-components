import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

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

export const LinkButton = ({to, className = '', iconLeft = null, iconRight = null, children, ...rest}) => (
    <NavLink to={to} className={['button', className].join(' ')} {...rest}>
        {iconLeft ? <span className='button--icon-left'>{iconLeft}</span> : null}
        {children}
        {iconRight ? <span className='button--icon-right'>{iconRight}</span> : null}
    </NavLink>
);

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    type: PropTypes.string,
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element,
    className: PropTypes.string,
    children: PropTypes.string.isRequired
};

export const Link = ({to, className = '', iconLeft = null, iconRight = null, children, ...rest}) => (
    <NavLink to={to} className={['link', className].join(' ')} {...rest}>
        {iconLeft ? <span className='button--icon-left'>{iconLeft}</span> : null}
        {children}
        {iconRight ? <span className='button--icon-right'>{iconRight}</span> : null}
    </NavLink>
);

Link.propTypes = {
    to: PropTypes.string.isRequired,
    type: PropTypes.string,
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element,
    className: PropTypes.string,
    children: PropTypes.string.isRequired
};
