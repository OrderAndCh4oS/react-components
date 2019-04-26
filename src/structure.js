/* eslint-disable react/prop-types,indent */
import React from 'react';

export const Container = ({children, tag = 'div', className = '', ...rest}) => {
    const Tag = `${tag}`;
    return (<Tag className={'container ' + className} {...rest}>{children}</Tag>);
};

export const ContainerFullWidth = ({children, className = '', ...rest}) => {
    return (<Container className={'container--full-width ' + className} {...rest}>{children}</Container>);
};

export const Row = ({children, tag = 'div', className = '', ...rest}) => {
    const Tag = `${tag}`;
    return (<Tag className={'row ' + className} {...rest}>{children}</Tag>);
};

export const Column = ({span = ['12'], push = [], tag = 'div', className = '', children, ...rest}) => {
    const Tag = `${tag}`;
    const classes = [
        'column',
        span.map(s => 'col-' + s).join(' '),
        push.map(s => 'push-' + s).join(' '),
        className,
    ].join(' ');
    return (
        <Tag className={classes} {...rest}>
            {children}
        </Tag>
    );
};

export const Panel = ({children, tag = 'div', className = '', ...rest}) => {
    const Tag = `${tag}`;
    return (
        <Tag className={'panel ' + className} {...rest}>
            {children}
        </Tag>
    );
};

function getRows(rows) {
    return rows.map(
        (row, index) =>
            <tr key={index}>
                {row.map((data, index) =>
                    <td key={index}>{data}</td>)}
            </tr>,
    );
}

function getHeaders(headers) {
    return <tr>{headers.map((header, index) =>
        <th key={index}>{header}</th>)}</tr>;
}

export const Table = ({headers = [], rows = [], className = '', ...rest}) =>
    <table className={'table ' + className}  {...rest}>
        <thead>
        {getHeaders(headers)}
        </thead>
        <tbody>
        {getRows(rows)};
        </tbody>
    </table>;
