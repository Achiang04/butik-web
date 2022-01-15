import ForgotPasswordForm from 'components/Form/ForgotPasswordForm';
import LoginForm from 'components/Form/LoginForm';
import RegisterForm from 'components/Form/RegisterForm';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import React, { useCallback, useEffect, useState } from 'react';

export interface Props {}

const Home = () => {
    const [session]: [any, boolean] = useSession();
    const [status, setStatus] = useState('login');
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push(`/home`);
        }
    }, [session]);

    const handleStatusLogin = useCallback(() => {
        setStatus('login');
    }, []);

    const handleStatusRegister = useCallback(() => {
        setStatus('register');
    }, []);

    const handleStatusForgot = useCallback(() => {
        setStatus('forgot');
    }, []);

    const getScreen = useCallback((status) => {
        switch (status) {
            case 'login':
                return (
                    <LoginForm
                        handleStatusRegister={handleStatusRegister}
                        handleStatusForgot={handleStatusForgot}
                    />
                );
            case 'register':
                return <RegisterForm handleStatusLogin={handleStatusLogin} />;
            case 'forgot':
                return <ForgotPasswordForm handleStatusLogin={handleStatusLogin} />;
        }
    }, []);

    return (
        <>
            <Head>
                <title>Butik</title>
            </Head>

            {getScreen(status)}
        </>
    );
};

Home.defaultProps = {};

export default React.memo(Home);
