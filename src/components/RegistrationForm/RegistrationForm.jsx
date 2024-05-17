import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };

    const UserSchema = Yup.object().shape({
        name: Yup.string()
            .min(10, "Too short!")
            .max(50, "Too long!")
            .required("Required!"),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(10, "Too short!")
            .max(17, "Too long!")
    });

        return (
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                }}
                validationSchema={UserSchema}
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
