/* eslint-disable react/prop-types */

import React from 'react';

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
    }) =>
    <input {...props} id={name} name={name} type={type} className={[
        'input--' + type,
        error ? 'input--error' : '',
        valid ? 'input--valid' : '',
        className,
    ].join(' ')}
    />
;

export const InputField = (
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
        <Field
            type={'form-field--' + type} error={error}
        >
            <Label label={label} htmlFor={name}/>
            <Input
                {...props} id={name}
                name={name}
                type={type}
                error={error}
                valid={valid}
            />
        </Field>
    );
};

export const TextArea = (
    {
        name,
        error = false,
        valid = false,
        className = '',
        ...props
    }) => (
    <textarea {...props} id={name} name={name} className={[
        'input--text-area',
        error ? 'input--error' : '',
        valid ? 'input--valid' : '',
        className,
    ].join(' ')}
    />
);

export const TextAreaField = (
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
        <TextArea
            {...props} id={name}
            name={name}
            error={error}
            valid={valid}
            className={className}
        />
    </Field>
);

export const SelectField = (
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
            <Select
                {...props} name={name}
                error={error}
                valid={valid}
                className={className}
                options={options}
                initialField={initialField}
            />
        </Field>
    );
};

export const Select = (
    {
        name,
        error = false,
        valid = false,
        className = '',
        options = [],
        initialField = 'Select an option',
        ...props
    }) =>
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
;

export const Switch = (
    {
        value = false,
        label,
        name,
        error,
        onChange,
        onBlur,
        className = '',
        ...props
    }) => {
    const classes = [
        'button--switch',
        className,
        value ? 'button--switch--on' : ''].join(' ');
    const title = [value ? 'button--switch--on' : 'button--switch--off'].join(
        ' ');
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
