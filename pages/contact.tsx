import Footer from 'components/Footer';
import Header from 'components/Header';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export interface ContactProps {}

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is Required').email('Email is not valid'),
    password: Yup.string().required('Password is Required').min(8)
});

const Contact = () => {
    return (
        <Formik
            onSubmit={(values) => {
                console.log('values', values);
            }}
            initialValues={{
                name: '',
                email: '',
                subject: '',
                message: ''
            }}
            validationSchema={validationSchema}>
            {(props) => {
                const {} = props;
                return (
                    <>
                        <Header />

                        <div className="flex flex-col items-center pt-24">
                            <div className="w-3/4 mt-10">
                                <div className="flex justify-between">
                                    <div className="w-1/2 mr-10">
                                        <p className="text-textPurple text-4xl font-semibold">
                                            Information About Us
                                        </p>
                                        <p className="mt-4 font-medium text-textSoftGray text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Mattis neque ultrices mattis aliquam, malesuada diam
                                            est. Malesuada sem tristique amet erat vitae eget dolor
                                            lobortis. Accumsan faucibus vitae lobortis quis bibendum
                                            quam.
                                        </p>
                                        <div className="flex mt-10">
                                            <div className="w-8 h-8 rounded-full bg-blueCircle" />
                                            <div className="w-8 h-8 rounded-full bg-pinkCircle ml-3" />
                                            <div className="w-8 h-8 rounded-full bg-cyanCircle ml-3" />
                                        </div>
                                    </div>
                                    <div className="w-1/2 ml-10">
                                        <p className="text-textPurple text-4xl font-semibold mb-4">
                                            Contact Way
                                        </p>
                                        <div className="flex">
                                            <div className="flex flex-col">
                                                <div className="flex items-center">
                                                    <div className="w-11 h-11 rounded-full bg-blueCircle" />
                                                    <div className="ml-4">
                                                        <p className="font-medium text-textSoftGray text-base">
                                                            082284914253
                                                        </p>
                                                        <p className="font-medium text-textSoftGray text-base">
                                                            ummifiracollection@gmail.com
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-10">
                                                    <div className="w-11 h-11 rounded-full bg-yellowCircle" />
                                                    <div className="ml-4">
                                                        <p className="font-medium text-textSoftGray text-base">
                                                            Jl. Bukit Indah Raya I
                                                        </p>
                                                        <p className="font-medium text-textSoftGray text-base">
                                                            No. 26, Sukajadi , Batam
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-10">
                                                <div className="flex items-center">
                                                    <div className="w-11 h-11 rounded-full bg-pinkCircle" />
                                                    <div className="ml-4">
                                                        <p className="font-medium text-textSoftGray text-base">
                                                            Support Forum
                                                        </p>
                                                        <p className="font-medium text-textSoftGray text-base">
                                                            For over 24hr
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-10">
                                                    <div className="w-11 h-11 rounded-full bg-greenCircle" />
                                                    <div className="ml-4">
                                                        <p className="font-medium text-textSoftGray text-base">
                                                            Free standard shipping
                                                        </p>
                                                        <p className="font-medium text-textSoftGray text-base">
                                                            on all orders.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-40 flex">
                                    <div className="w-2/6 mr-10">
                                        <p className="text-textPurple text-4xl font-semibold">
                                            Get In Touch
                                        </p>
                                        <p className="mt-4 font-medium text-textSoftGray text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Mattis neque ultrices tristique amet erat vitae eget
                                            dolor los vitae lobortis quis bibendum quam.
                                        </p>
                                    </div>
                                    <div className="w-4/6 ml-10">
                                        <img
                                            className="w-full h-200"
                                            src="/img/contact_us.png"
                                            alt=""
                                        />
                                    </div>
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

Contact.defaultProps = {};

export default React.memo(Contact);
