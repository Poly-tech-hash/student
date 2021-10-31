import React from 'react';
import { Formik, Form } from 'formik';
import Register from './register';
import * as Yup from 'yup';
import './index.css';

 function App()  {

    const validate = Yup.object({
        name: Yup.string().required('Please enter your name'),
        surname: Yup.string().required('Please enter your surname'),
        age: Yup.string().required('Please enter your age'),
        location: Yup.string().max(12,'Please location should contain at least 12 charecters').required('Please enter')

    })

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    age: '',
                    location: '',
                }}

                validationSchema={validate}
            >
                {formik => (
                    <>
                    <Form>
                        <input
                        Register-Form lable="Name" name="name" type="text" placeholder="Enter your name" />
                        <input
                        Register-Form lable="Surname" name="surname" type="text" placeholder="Enter your surname" />
                        <input
                        Register-Form lable="Age" name="age" type="text" placeholder="Enter your age" />
                        <input
                        Register-Form lable="Location" name="location" type="text" placeholder="Enter your loction" />
                        <button class="form-field" type="submit">
                        Get Data
                        </button>
                    </Form>
                    </>
                )}
            </Formik>
        </>
    )
} 

export default App;

