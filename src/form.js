import React from 'react';
import * as styles from '@orderandchaos/react-styles/dist/styles.css';

const Label = ({label, htmlFor}) =>
    <label
        htmlFor={htmlFor} className={styles.label_text}
    >{label}</label>;

export const FormError = ({error}) => error ?
    <p className={styles.c_error}>{error}</p> : null;

export const Field = ({className, type, children, error}) => (
    <div className={`${styles.formField}, ${type}, ${className}`}>
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
        className = null,
        ...props
    }) => {
    return (
        <Field type={type} error={error}>
            <Label label={label} htmlFor={name}/>
            <input
                {...props}
                id={name}
                name={name}
                type={type}
                className={`input ${error ? styles.input_error : null}, ${valid
                    ? styles.input_valid
                    : null}, ${className}`}
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
        className = null,
        ...props
    }) => (
    <Field type='formField--textArea' error={error}>
        <Label label={label} htmlFor={name}/>
        <textarea
            {...props}
            id={name}
            name={name}
            className={`input_textArea ${error
                ? styles.input_error
                : null} ${valid ? styles.input_valid : null} ${className}`}
        />
    </Field>
);

export const Select = (
    {
        label,
        name,
        error = false,
        valid = false,
        className = null,
        options = [],
        initialField = 'Select an option',
        ...props
    }) => {
    return (
        <Field type='form-field--select' error={error}>
            <Label label={label} htmlFor={name}/>
            <select
                {...props}
                id={name}
                name={name}
                className={`input--select ${error
                    ? styles.input_error
                    : null} ${className}`}
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
        className = null,
        ...props
    }) => {
    const classes = `${styles.button_switch} ${className} ${value
        ? styles.button_switch_on
        : null}`;
    const title = value ? 'On' : 'Off';
    return (
        <Field type='formField_switch' error={error}>
            <Label label={label} htmlFor={name}/>
            <button
                type='button'
                id={name}
                title={title}
                onBlur={() => {onBlur(true);}}
                onClick={() => {onChange(name, !value);}}
                className={classes}
                {...props}
            />
        </Field>
    );
};
