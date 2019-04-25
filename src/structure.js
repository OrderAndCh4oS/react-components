/* eslint-disable react/prop-types,indent */
import React from 'react';

export const Container = ({children, className = '', ...rest}) =>
    <div className={'container ' + className} {...rest}>{children}</div>;

export const Row = ({children, className = '', ...rest}) =>
    <div className={'row ' + className} {...rest}>{children}</div>;

export const Column = ({span = ['12'], push = [], className = '', children, ...rest}) => {
    const classes = [
        'column',
        span.map(s => 'col-' + s).join(' '),
        push.map(s => 'push-' + s).join(' '),
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

export const Panel = ({children, className = '', ...rest}) =>
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
