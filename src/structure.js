/* eslint-disable react/prop-types,indent */
import React from 'react';

export const Container = ({className = '', children, ...rest}) =>
    <div className={'container ' + className} {...rest}>{children}</div>;

export const Row = ({className = '', children, ...rest}) =>
    <div className={'row ' + className} {...rest}>{children}</div>;

export const Column = ({span = 12, push = false, className = '', children, ...rest}) => {
    const classes = [
        'column',
        'col-' + span,
        push ? ' push-' + push : '',
        className
    ].join(' ');
    return (
        <div className={classes} {...rest}>
            <div>
                {children}
            </div>
        </div>
    );
};

export const Panel = ({className = '', children, ...rest}) =>
    <div className={'panel ' + className} {...rest}>
        {children}
    </div>
;

export const Table = ({headers = [], rows = [], className = '', ...rest}) =>
    <table className={'table ' + className}  {...rest}>
        <thead>
        <tr>
            {headers.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
        </thead>
        <tbody>
        {rows.map(
            (row, index) =>
                <tr key={index}>
                    {row.map((data, index) => <td key={index}>{data}</td>)}
                </tr>
        )}
        </tbody>
    </table>;
