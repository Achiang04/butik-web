import LoginForm from 'components/Form/LoginForm';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import React, { useEffect } from 'react';

export interface Props {}

const Home = () => {
    const [session]: [any, boolean] = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push(`/home`);
        }
    }, [session]);

    return (
        <>
            <Head>
                <title>Butik</title>
            </Head>

            <LoginForm />
        </>
    );
};

Home.defaultProps = {};

export default React.memo(Home);
