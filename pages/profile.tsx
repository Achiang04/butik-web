import clsx from 'clsx';
import Footer from 'components/Footer';
import Header from 'components/Header';
import TextAreaComponent from 'components/input/TextAreaComponent';
import TextInput from 'components/input/TextInput';
import { Formik } from 'formik';
import Head from 'next/head';
import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';

const validationSchemaAccount = Yup.object().shape({
    email: Yup.string().required('Email is Required').email('Email is not valid'),
    first_name: Yup.string().required('First Name is Required'),
    last_name: Yup.string().required('Last Name is Required'),
    city: Yup.string().required('City is Required'),
    address: Yup.string().required('Address is Required'),
    phone: Yup.string()
        .matches(/^[+][0-9]{6,}$/, {
            message: 'Enter correct phone number',
            excludeEmptyString: true
        })
        .required()
});

const validationSchemaPassword = Yup.object().shape({
    currentPassword: Yup.string().required('Current Password is Required').min(8),
    newPassword: Yup.string().required('Password is Required').min(8),
    confirmNewPassword: Yup.string()
        .required('Confirm Password is Required')
        .oneOf([Yup.ref('password'), null], 'Passwords not match')
});

const valuesAccount = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    bio: ''
};

const valuesPassword = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
};

const Profile = () => {
    const [status, setStatus] = useState('account');

    const handleChangeToAccount = useCallback(() => {
        setStatus('account');
    }, []);

    const handleChangeToPassword = useCallback(() => {
        setStatus('password');
    }, []);

    return (
        <Formik
            onSubmit={(values) => {
                console.log('values', values);
            }}
            initialValues={status === 'account' ? valuesAccount : valuesPassword}
            validationSchema={
                status === 'account' ? validationSchemaAccount : validationSchemaPassword
            }>
            {(props) => {
                /* eslint-disable react/prop-types */
                const { isSubmitting } = props;
                return (
                    <>
                        <Head>
                            <title>Butik</title>
                        </Head>

                        <Header />

                        <div className="flex flex-col items-center py-24">
                            <div className="w-4/6 mt-20 rounded shadow-xl flex">
                                <div className="w-1/4 border-r">
                                    <div className="flex flex-col items-center p-10">
                                        <img
                                            className="w-40 h-40 rounded-full"
                                            src="/img/default_user.png"
                                            alt="default"
                                        />
                                        <p className="text-2xl font-bold mt-5">John Doe</p>
                                    </div>
                                    <div className="flex flex-col self-start items-start w-full">
                                        <button
                                            className={clsx(
                                                'py-3 border-t border-b w-full hover:bg-cardBg',
                                                status === 'account' && 'bg-cardBg'
                                            )}
                                            type="button"
                                            onClick={handleChangeToAccount}>
                                            <p className="text-softGray text-base font-semibold">
                                                Account
                                            </p>
                                        </button>
                                        <button
                                            className={clsx(
                                                'py-3 border-t border-b w-full mb-10 hover:bg-cardBg',
                                                status === 'password' && 'bg-cardBg'
                                            )}
                                            type="button"
                                            onClick={handleChangeToPassword}>
                                            <p className="text-softGray text-base font-semibold">
                                                Password
                                            </p>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-3/4 p-10">
                                    {status === 'account' ? (
                                        <form>
                                            <p className="text-2xl font-bold">Account Settings</p>
                                            <div className="flex mt-5">
                                                <div className="w-1/2 mr-5">
                                                    <TextInput
                                                        label="First Name"
                                                        placeholder="John"
                                                        type="text"
                                                        name="first_name"
                                                        withFormik
                                                    />
                                                    <div className="my-2">
                                                        <TextInput
                                                            label="Email"
                                                            placeholder="example@mail.com"
                                                            type="email"
                                                            name="email"
                                                            withFormik
                                                        />
                                                    </div>
                                                    <TextInput
                                                        label="City"
                                                        placeholder="Batam"
                                                        type="text"
                                                        name="city"
                                                        withFormik
                                                    />
                                                </div>
                                                <div className="w-1/2 ml-5">
                                                    <TextInput
                                                        label="Last Name"
                                                        placeholder="Doe"
                                                        type="text"
                                                        name="last_name"
                                                        withFormik
                                                    />
                                                    <div className="my-2">
                                                        <TextInput
                                                            label="Phone"
                                                            placeholder="+6282387410597"
                                                            type="number"
                                                            name="phone"
                                                            withFormik
                                                        />
                                                    </div>
                                                    <TextInput
                                                        label="Address"
                                                        placeholder="Jl. Bukit Indah Raya I No. 26, Sukajadi"
                                                        type="text"
                                                        name="address"
                                                        withFormik
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <TextAreaComponent
                                                    placeholder="Bio"
                                                    name="bio"
                                                    withFormik
                                                />
                                            </div>
                                            <div className="flex justify-end mt-5">
                                                <button
                                                    type="submit"
                                                    className="bg-pink text-white justify-center py-3 px-8 rounded font-bold text-base"
                                                    disabled={isSubmitting}>
                                                    Update
                                                </button>
                                            </div>
                                        </form>
                                    ) : (
                                        <form>
                                            <p className="text-2xl font-bold mb-5">
                                                Change Password
                                            </p>
                                            <TextInput
                                                label="Current Password"
                                                placeholder="Enter your current password"
                                                type="password"
                                                name="password"
                                                withFormik
                                            />
                                            <div className="my-2">
                                                <TextInput
                                                    label="New Password"
                                                    placeholder="Enter your new password"
                                                    type="password"
                                                    name="confirmPassword"
                                                    withFormik
                                                />
                                            </div>
                                            <TextInput
                                                label="Confirm New Password"
                                                placeholder="Enter your confirm new password"
                                                type="password"
                                                name="password"
                                                withFormik
                                            />
                                            <div className="flex justify-end mt-5">
                                                <button
                                                    type="submit"
                                                    className="bg-pink text-white justify-center py-3 px-8 rounded font-bold text-base"
                                                    disabled={isSubmitting}>
                                                    Update
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Footer />
                    </>
                );
            }}
        </Formik>
    );
};

Profile.defaultProps = {};

export default React.memo(Profile);
