import {Field, WrappedFieldProps} from 'redux-form'
import classes from './FormControls.module.css'
import {ValidatorType} from "../validators/validators";
import React from "react";

type InputPropsType = { text?: string }
type TextareaPropsType = { maxLength: number }


export const Input: React.FC<WrappedFieldProps & InputPropsType> = ({input, meta: {touched, error, active}, text, ...props}) => {
    const hasError = touched && error
    return (
        <div className={`${classes.group}  ${hasError ? classes.invalidGroup : (input.value || (input.value && touched) ? classes.validGroup : '')}`}>
            <input className={classes.input} {...input} {...props} />
            <span className={classes.bar}></span>
            <label className={classes.label}>{active ? `Enter your ${text}` : hasError ? `${text} ${error}` : text}</label>
        </div>
    )
}


export const Textarea: React.FC<WrappedFieldProps & TextareaPropsType> = ({input, meta, maxLength, ...props}) => {
    return (
        <>
            <span className={classes.textSize}>{`${input.value.length}/${maxLength}`}</span>
            <textarea {...input} {...props} maxLength={maxLength}></textarea>
        </>
    )
}


export function createField<KeysType extends string>(
    component: React.FC<WrappedFieldProps>, validators: ValidatorType[],
    placeholder: string, name: KeysType, type: string, text: string, props?: any) {

    return <Field
        component={component} validate={validators}
        name={name} type={type} placeholder={placeholder}
        text={text} {...props} />
}
