import { Field } from 'redux-form'
import classes from './FormControls.module.css'

export const Input = ({ input, meta: { touched, error, active }, text, ...props }) => {
	const hasError = touched && error
	return (
		<div className={`${classes.group}  ${hasError ? classes.invalidGroup : (input.value || (input.value && touched) ? classes.validGroup : '')}`}>
			<input className={classes.input} {...input} {...props} />
			<span className={classes.bar}></span>
			<label className={classes.label}>{active ? `Enter your ${text}` : hasError ? `${text} ${error}` : text}</label>
		</div>
	)
}


export const Textarea = ({ input, meta, maxLength, ...props }) => {
	return (
		<>
			<span className={classes.textSize}>{`${input.value.length}/${maxLength}`}</span>
			<textarea {...input} {...props} maxLength={maxLength} ></textarea>
		</>
	)
}



export const createField = (component, validators, placeholder, name, type, text, props) => {
	return <Field component={component} validate={validators}
		name={name} type={type} placeholder={placeholder}
		text={text} {...props} />
}
