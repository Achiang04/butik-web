import BaseInput from 'components/input/BaseInput';
import { Formik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import * as Yup from 'yup';

export interface Props {
    handleChangeStatus: () => void;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is Required').email('Email is not valid'),
    password: Yup.string().required('Password is Required').min(8),
    confirmPassword: Yup.string().required('Password is Required').min(8)
});

const RegisterForm = ({ handleChangeStatus }: Props) => {
    const router = useRouter();

    return (
        <Formik
            onSubmit={(values) => {
                console.log('values', values);
                router.push('/product');
            }}
            initialValues={{
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validationSchema}>
            {(props) => {
                const { handleSubmit, isSubmitting } = props;
                return (
                    <div className="w-screen h-screen flex justify-center items-center bg-white">
                        <div className="border rounded-lg shadow-xl pt-12 pb-14 px-14 bg-white flex flex-col">
                            <p className="text-4xl self-center font-extrabold">Register</p>
                            <p className="text-softGray text-base mt-2 self-center">
                                Please fill your account detail bellow.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-9 min-w-110">
                                    <BaseInput
                                        placeholder="Email address"
                                        type="email"
                                        name="email"
                                        withFormik
                                    />
                                    <div className="mt-3">
                                        <BaseInput
                                            placeholder="Password"
                                            type="password"
                                            name="password"
                                            withFormik
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <BaseInput
                                            placeholder="Confirm Password"
                                            type="password"
                                            name="confirmPassword"
                                            withFormik
                                        />
                                    </div>
                                </div>
                                <button
                                    className="flex bg-pink text-white min-w-110 justify-center py-3 mt-5 rounded font-bold text-base"
                                    type="submit"
                                    disabled={isSubmitting}>
                                    Sign Up
                                </button>
                            </form>
                            <div className="flex justify-center mt-5">
                                <p className="text-softGray text-base font-extralight">
                                    Already have Account?{' '}
                                    <button onClick={handleChangeStatus} className="font-semibold">
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

export default React.memo(RegisterForm);
