/* eslint-disable react/prop-types,indent */
import React from 'react';
import * as styles from '@orderandchaos/react-styles/dist/styles.css';

export const Container = ({children, tag = 'div', className = null, ...rest}) => {
    const Tag = `${tag}`;
    return (
        <Tag className={`${styles.container} ${className}`} {...rest}>{children}</Tag>);
};

export const ContainerFullWidth = ({children, className = null, ...rest}) => {
    return (
        <Container className={`${styles.container_fullWidth} ${className}`} {...rest}>{children}</Container>);
};

export const Row = ({children, tag = 'div', className = null, ...rest}) => {
    const Tag = `${tag}`;
    return (
        <Tag className={`${styles.row} ${className}`} {...rest}>{children}</Tag>);
};

export const Column = ({span = styles.col12, push = null, tag = 'div', className = null, children, ...rest}) => {
    const Tag = `${tag}`;
    const classes = `${styles.column} ${span} ${push} ${className}`;
    return (
        <Tag className={classes} {...rest}>
            {children}
        </Tag>
    );
};

export const Panel = ({children, tag = 'div', className = null, ...rest}) => {
    const Tag = `${tag}`;
    return (
        <Tag className={`${styles.panel} ${className}`} {...rest}>
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

export const Table = ({headers = [], rows = [], className = null, ...rest}) =>
    <table className={`table ${className}`}  {...rest}>
        <thead>
        {getHeaders(headers)}
        </thead>
        <tbody>
        {getRows(rows)};
        </tbody>
    </table>;
