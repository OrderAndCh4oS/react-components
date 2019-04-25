/* eslint-disable react/prop-types */

import React from 'react';
import RCSlider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const Label = ({label, htmlFor}) => <label
    htmlFor={htmlFor} className="label--text"
>{label}</label>;

export const FormError = ({error}) => error ?
    <p className="form-field--error">{error}</p> : null;

export const Field = ({className, type, children, error}) => (
    <div className={['form-field', type, className].join(' ')}>
        {children}
        <FormError error={error}/>
    </div>
);

export const Input = (
    {
        label,
        name,
        type = 'text',
        error = false,
        valid = false,
        className = '',
        ...props
    }) => {
    return (
        <Field type={'form-field--' + type} error={error}>
            <Label label={label} htmlFor={name}/>
            <input {...props} id={name} name={name} type={type} className={[
                'input--' + type,
                error ? 'input--error' : '',
                valid ? 'input--valid' : '',
                className,
            ].join(' ')}
            />
        </Field>
    );
};

export const TextArea = (
    {
        label,
        name,
        error = false,
        valid = false,
        className = '',
        ...props
    }) => (
    <Field type='form-field--text-area' error={error}>
        <Label label={label} htmlFor={name}/>
        <textarea {...props} id={name} name={name} className={[
            'input--text-area',
            error ? 'input--error' : '',
            valid ? 'input--valid' : '',
            className,
        ].join(' ')}
        />
    </Field>
);

export const Select = (
    {
        label,
        name,
        error = false,
        valid = false,
        className = '',
        options = [],
        initialField = 'Select an option',
        ...props
    }) => {
    return (
        <Field type='form-field--select' error={error}>
            <Label label={label} htmlFor={name}/>
            <select {...props} id={name} name={name} className={[
                'input--select',
                error ? 'input--error' : '',
                className,
            ].join(' ')}
            >
                <option value="">{initialField}</option>
                {options.map((option) =>
                    <option
                        key={option.value} value={option.value}
                    >{option.name}</option>,
                )}
            </select>
        </Field>
    );
};

export const Switch = (
    {
        value = false,
        label,
        name,
        error,
        onChange,
        onBlur,
        className,
        ...props
    }) => {
    const classes = ['button--switch', className, value ? 'button--switch--on' : ''].join(' ');
    const title = [value ? 'button--switch--on' : 'button--switch--off'].join(' ');
    return (
        <Field type='form-field--switch' error={error}>
            <Label label={label} htmlFor={name}/>
            <button
                type='button' id={name} title={title} onBlur={() => {
                onBlur(true);
            }} onClick={() => {
                onChange(name, !value);
            }} className={classes}
                {...props}
            />
        </Field>
    );
};

const StyledSlider = (props) =>
    <RCSlider
        {...props} style={{marginTop: 18}} handleStyle={{
        borderColor: '#332f2f',
        borderWidth: 1,
        height: 14,
        width: 14,
        marginLeft: -7,
        marginTop: -3,
        backgroundColor: '#fcfcfc',

    }} railStyle={{backgroundColor: '#332f2f', height: 8}} trackStyle={{
        backgroundColor: '#fcfcfc',
        height: 6,
        marginTop: 1,
        marginLeft: 1,
    }}
    />;

export const Slider = (
    {
        label,
        value,
        name,
        error,
        decimals = 0,
        className,
        onChange,
        onBlur,
        ...props
    }) => {
    return (
        <Field type={'form-field--slider'} error={error}>
            <Label
                label={label + ': ' + value.toFixed(decimals)} htmlFor={name}
            />
            <StyledSlider
                name={name}
                id={name}
                value={value}
                className={['input--slider', className].join(' ')}
                onChange={(value) => {
                    onChange(name, value);
                }}
                onLoad={() => {
                    onBlur(true);
                }}
                {...props}
            />
        </Field>
    );
};
