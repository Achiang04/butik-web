import BaseInput from 'components/input/BaseInput';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export interface Props {
    handleStatusLogin: () => void;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is Required').email('Email is not valid')
});

const LoginForm = ({ handleStatusLogin }: Props) => {
    return (
        <Formik
            onSubmit={(values) => {
                console.log(values);
            }}
            initialValues={{
                email: ''
            }}
            validationSchema={validationSchema}>
            {(props) => {
                const { handleSubmit, isSubmitting } = props;
                return (
                    <div className="w-screen h-screen flex justify-center items-center bg-white">
                        <div className="border rounded-lg shadow-xl pt-12 pb-14 px-14 bg-white flex flex-col">
                            <p className="text-4xl self-center font-extrabold">Forgot Password</p>
                            <p className="text-softGray text-base mt-2 self-center">
                                Enter your email address and we’ll send you a link to reset your
                                password
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-9 min-w-110">
                                    <BaseInput
                                        placeholder="Email address"
                                        type="email"
                                        name="email"
                                        withFormik
                                    />
                                </div>
                                <button
                                    className="flex bg-pink text-white w-full min-w-110 justify-center py-3 mt-5 rounded font-bold text-base"
                                    type="submit"
                                    disabled={isSubmitting}>
                                    Sign In
                                </button>
                            </form>
                            <div className="flex justify-center mt-5">
                                <p className="text-softGray text-base font-extralight">
                                    <button onClick={handleStatusLogin} className="font-semibold">
                                        Back to Login
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

export default React.memo(LoginForm);
