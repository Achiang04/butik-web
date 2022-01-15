import BaseInput from 'components/input/BaseInput';
import { Formik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';

interface Props {
    email: string;
}

const validationSchema = Yup.object().shape({
    password: Yup.string().required('Password is Required').min(8),
    confirmPassword: Yup.string()
        .required('Confirm Password is Required')
        .oneOf([Yup.ref('password'), null], 'Passwords not match')
});

const ResetPasswordForm = ({ email }: Props) => {
    const router = useRouter();
    const [doneReset, setDoneReset] = useState(false);

    const handleLogin = useCallback(() => {
        router.push('/');
    }, []);

    return (
        <Formik
            onSubmit={(values) => {
                console.log('values', values);
                setDoneReset(true);
            }}
            initialValues={{
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validationSchema}>
            {(props) => {
                const { handleSubmit, isSubmitting } = props;
                return (
                    <div className="w-screen h-screen flex justify-center items-center bg-white">
                        <div className="border rounded-lg shadow-xl pt-12 pb-14 px-14 bg-white flex flex-col">
                            {!doneReset ? (
                                <>
                                    <p className="text-4xl self-center font-extrabold">
                                        Reset Password
                                    </p>
                                    <p className="text-softGray text-base mt-2 self-center">
                                        Enter your new password which is must be different than your
                                        old password
                                    </p>
                                    <p className="text-base text-softGray my-5">
                                        your email :
                                        <span className="ml-2 font-medium text-pink">{email}</span>
                                    </p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="min-w-110">
                                            <BaseInput
                                                placeholder="Password"
                                                type="password"
                                                name="password"
                                                withFormik
                                            />
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
                                            className="flex bg-pink text-white w-full min-w-110 justify-center py-3 mt-5 rounded font-bold text-base"
                                            type="submit"
                                            disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="flex flex-col items-center mt-5">
                                    <p className="text-softGray text-base font-extralight">
                                        Your password has been changed, please use your new password
                                        to login
                                    </p>
                                    <button
                                        type="button"
                                        onClick={handleLogin}
                                        className="font-semibold text-softGray text-base font-extralight mt-5">
                                        Back to Login
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

export default React.memo(ResetPasswordForm);
