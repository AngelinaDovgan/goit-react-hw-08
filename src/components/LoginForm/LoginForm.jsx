import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { Field, Formik } from "formik";
import { Form } from "formik";
import css from './LoginForm.module.css';


export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values))
        .unwrap()
        .then(response => {
            toast.success("Yohoo!");
        })
        .catch(error => {
            toast.error("Something went wrong...");
        })
        .finally(() => {
            resetForm();
        });
};


    return (
       <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <label>
                    Email
                    <Field type="email" name="email" />
                </label>
                
                <label>
                    Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Log In</button>
            </Form>
            </Formik>
    );
}
