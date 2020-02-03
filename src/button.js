import React from 'react';
import {NavLink} from 'react-router-dom';
import * as styles from '@orderandchaos/react-styles/dist/styles.css';

export const Button = ({className = null, iconLeft = null, iconRight = null, children, ...rest}) => (
    <button className={`${styles.button} ${className}`} {...rest}>
        {iconLeft ? <span className='button--icon-left'>{iconLeft}</span> : null}
        {children}
        {iconRight ? <span className='button--icon-right'>{iconRight}</span> : null}
    </button>
);

export const LinkButton = ({to, className = null, iconLeft = null, iconRight = null, children, ...rest}) => (
    <NavLink to={to} className={`${styles.button} ${className}`} {...rest}>
        {iconLeft ? <span className='button--icon-left'>{iconLeft}</span> : null}
        {children}
        {iconRight ? <span className='button--icon-right'>{iconRight}</span> : null}
    </NavLink>
);

export const Link = ({to, className = null, iconLeft = null, iconRight = null, children, ...rest}) => (
    <NavLink to={to} className={`link ${className}`} {...rest}>
        {iconLeft ? <span className='button--icon-left'>{iconLeft}</span> : null}
        {children}
        {iconRight ? <span className='button--icon-right'>{iconRight}</span> : null}
    </NavLink>
);
