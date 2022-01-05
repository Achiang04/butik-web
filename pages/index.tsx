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
            router.push(`/product`);
        }
    }, [session]);

    const handleChangeStatus = useCallback(() => {
        if (status === 'login') {
            setStatus('register');
        } else if (status === 'register') {
            setStatus('login');
        }
    }, [status]);

    return (
        <>
            <Head>
                <title>Butik</title>
            </Head>

            {status === 'login' ? (
                <LoginForm handleChangeStatus={handleChangeStatus} />
            ) : (
                <RegisterForm handleChangeStatus={handleChangeStatus} />
            )}
        </>
    );
};

Home.defaultProps = {};

export default React.memo(Home);
