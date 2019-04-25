import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export const Button = ({type = 'primary', className = '', iconLeft = null, iconRight = null, children, ...rest}) => (
    <button className={['button', type, iconLeft ? 'icon-left' : '', className].join(' ')} {...rest}>
        {iconLeft ? <span className='icon-left'>{iconLeft}</span> : null}
        {iconLeft ? ' ' : null}
        {children}
        {iconRight ? ' ' : null}
        {iconRight ? <span className='icon-right'>{iconRight}</span> : null}
    </button>
);

Button.propTypes = {
    type: PropTypes.string,
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element,
    className: PropTypes.string,
    children: PropTypes.string.isRequired
};

export const LinkButton = ({to, type = 'primary', className = '', iconLeft = null, iconRight = null, children, ...rest}) => (
    <NavLink to={to} className={['button', type, iconLeft ? 'icon-left' : '', className].join(' ')} {...rest}>
        {iconLeft ? <span className='icon-left'>{iconLeft}</span> : null}
        {iconLeft ? ' ' : null}
        {children}
        {iconRight ? ' ' : null}
        {iconRight ? <span className='icon-right'>{iconRight}</span> : null}
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

export const Link = ({to, type = 'text', className = '', iconLeft = null, iconRight = null, children, ...rest}) => (
    <NavLink to={to} className={['link', type, iconLeft ? 'icon-left' : '', className].join(' ')} {...rest}>
        {iconLeft ? <span className='icon-left'>{iconLeft}</span> : null}
        {iconLeft ? ' ' : null}
        {children}
        {iconRight ? ' ' : null}
        {iconRight ? <span className='icon-right'>{iconRight}</span> : null}
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