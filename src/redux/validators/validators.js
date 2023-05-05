export const required = value => value ? undefined : "Required";

export const minLengthCreator = (length) => value => value.length >= length ? undefined : `Min length: ${length} symbols`
export const maxLengthCreator = (length) => value => value.length <= length ? undefined : `Max length: ${length} symbols`
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const loginValidator = composeValidators( required, minLengthCreator(3), maxLengthCreator(16) );
export const passwordValidator = composeValidators( required, minLengthCreator(6), maxLengthCreator(16) );
const confirmed = value => {
    debugger
    return value.confirm === value.plane_password ? undefined : 'Passwords not match'
}

export const registrationValidator = composeValidators(required, minLengthCreator(6), maxLengthCreator(16), confirmed)