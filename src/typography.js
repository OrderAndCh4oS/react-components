import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({tag = 'h1', className = '', children, ...rest}) => {
    const HeadingTag = `${tag}`;
    return (<HeadingTag className={'title ' + className} {...rest}>{children}</HeadingTag>);
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
    <p className={'intro-text ' + className} {...rest}>{children}</p>;

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
