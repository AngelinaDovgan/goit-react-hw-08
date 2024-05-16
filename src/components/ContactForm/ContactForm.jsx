import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import { object, string, number } from 'yup';
import { useDispatch } from "react-redux";
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css'
import { nanoid } from "@reduxjs/toolkit";


const UserSchema = object({
    name: string().min(3, "Type at least 3 characters!").max(50, "Max number of characters is 50!").required("Is required!"),
    number: string().matches((/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/), "Invalid phone number format").required("Is required!")
})
export default function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact({
            name: values.name,
            number: values.number,
        }))
        actions.resetForm();
    }

const nameId = useId();
const numberId = useId();

const initialValues = {
name: "",
number: ""
};
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}>
            <Form className={css.frm}>
                <div className={css.group}>
                 <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} />
                <ErrorMessage name="name" component="span" className={css.span}/>   
                </div>
                
                <div className={css.group}>
                   <label htmlFor={numberId}>Number</label>
                    <Field type="number" name="number" id={numberId} />
                <ErrorMessage name="number" component="span" className={css.span}/>  
                </div>
               
            <button type="submit" className={css.btn}>Add contact</button>
        </Form> 
        </Formik>
        
    );
}