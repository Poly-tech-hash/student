import React from 'react';
import { ErrorMessage, useField } from "formik";

//import 'bootstrap/dist/css/bootstrap.min.css';

///to install bootstrap { npm i bootstrap }

const Register = ({label, ...props}) => {
    // eslint-disable-next-line

const [ field, ] = useField(props)

    return (
        <>
            <label>{label}</label>
            <input
                {...field} {...props} autoComplete="off">
            </input>
            <ErrorMessage name={ field.name}></ErrorMessage>
        </>
    )
}

export default Register;