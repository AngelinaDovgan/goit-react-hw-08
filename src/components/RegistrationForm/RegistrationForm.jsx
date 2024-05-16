import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <label>Username
                    <Field type="text" name="name" />
                </label>

                <label>
                    Email
                    <Field type="email" name="email" />
                </label>
                <label>
                    Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}
//оновилось?