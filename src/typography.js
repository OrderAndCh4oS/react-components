import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({tag = 'h1', className = '', children, ...rest}) => {
    const Tag = `${tag}`;
    return (<Tag className={'title ' + className} {...rest}>{children}</Tag>);
};

Title.propTypes = {
    tag: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string.isRequired
};

export const Pretitle = ({className = '', children, ...rest}) =>
    <p className={'pretitle ' + className} {...rest}>{children}</p>;

Pretitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired
};

export const IntroText = ({className = '', children, ...rest}) =>
    <p className={'text--intro ' + className} {...rest}>{children}</p>;

IntroText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired
};

export const Text = ({className = '', children, ...rest}) =>
    <p className={'text ' + className} {...rest}>{children}</p>;

Text.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
};

export const BlockQuote = ({tag = 'blockquote', className = '', children, ...rest}) => {
    const Tag = `${tag}`;
    return (
        <Tag className={'blockquote ' + className} {...rest}>
            {children}
        </Tag>
    );
};

BlockQuote.propTypes = {
    tag: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any.isRequired
};

export const Citation = ({className = '', children, ...rest}) =>
    <span className={'citation ' + className} {...rest}>
        {children}
    </span>
;

Citation.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
};
