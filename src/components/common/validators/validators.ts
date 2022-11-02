import {RegisterDataType} from "../../../types/forms";

export type ValidatorType = (value: string, all: RegisterDataType) => string | undefined

const maxLengthCreator = (maxSize: number): ValidatorType => (value) => value && value.length <= maxSize ? undefined : `Max length is ${maxSize} symbols`


export const correctEmail: ValidatorType = (value) => {
    const emailRegexp = new RegExp(/^[a-zA-Z0-9][-_.+!#$%&'*/=?^`{|]{0,1}([a-zA-Z0-9][-_.+!#$%&'*/=?^`{|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-.]{0,1}([a-zA-Z][-.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([.-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i)
    return emailRegexp.test(value) ? undefined : 'is`nt correct'
}
export const confirmPassword: ValidatorType = (value, all) => value === all.password ? undefined : 'correctly'
export const requiredField: ValidatorType = (value: string) => value ? undefined : 'is required'
export const maxLength150 = maxLengthCreator(150)
export const maxLength25 = maxLengthCreator(25)
