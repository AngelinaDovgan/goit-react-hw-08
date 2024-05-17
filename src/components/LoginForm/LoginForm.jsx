import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { Field, Formik } from "formik";
import { Form } from "formik";


export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, action) => {
        dispatch(login(values))
            .unwrap()
            .then(response => {
                toast.success("Yohoo!");
            })
            .catch(error => {
                console.log(error);
            });
        actions.resetForm();
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
