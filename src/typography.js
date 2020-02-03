import React from 'react';
import * as styles from '@orderandchaos/react-styles/dist/styles.css';

export const Title = ({tag = 'h1', className = '', children, ...rest}) => {
    const Tag = `${tag}`;
    return (<Tag className={`title ${className}`} {...rest}>{children}</Tag>);
};

export const Pretitle = ({className = '', children, ...rest}) =>
    <p className={`${styles.pretitle} ${className}`} {...rest}>{children}</p>;

export const IntroText = ({className = '', children, ...rest}) =>
    <p className={`${styles.text_intro} ${className}`} {...rest}>{children}</p>;

export const Text = ({className = '', children, ...rest}) =>
    <p className={`${styles.text} ${className}`} {...rest}>{children}</p>;

export const BlockQuote = ({tag = 'blockquote', className = '', children, ...rest}) => {
    const Tag = `${tag}`;
    return (
        <Tag className={`${styles.blockquote} ${className}`} {...rest}>
            {children}
        </Tag>
    );
};

export const Citation = ({className = '', children, ...rest}) =>
    <span className={`${styles.citation} ${className}`} {...rest}>
        {children}
    </span>
;
