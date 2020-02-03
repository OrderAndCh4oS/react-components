import React from 'react';
import * as styles from '@orderandchaos/react-styles/dist/styles.css';

export const Title = ({tag = 'h1', className = null, children, ...rest}) => {
    const Tag = `${tag}`;
    return (<Tag className={`title ${className}`} {...rest}>{children}</Tag>);
};

export const Pretitle = ({className = null, children, ...rest}) =>
    <p className={`${styles.pretitle} ${className}`} {...rest}>{children}</p>;

export const IntroText = ({className = null, children, ...rest}) =>
    <p className={`${styles.text_intro} ${className}`} {...rest}>{children}</p>;

export const Text = ({className = null, children, ...rest}) =>
    <p className={`${styles.text} ${className}`} {...rest}>{children}</p>;

export const BlockQuote = ({tag = 'blockquote', className = null, children, ...rest}) => {
    const Tag = `${tag}`;
    return (
        <Tag className={`${styles.blockquote} ${className}`} {...rest}>
            {children}
        </Tag>
    );
};

export const Citation = ({className = null, children, ...rest}) =>
    <span className={`${citation} ${className}`} {...rest}>
        {children}
    </span>
;
