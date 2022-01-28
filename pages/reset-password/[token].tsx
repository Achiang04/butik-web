import ResetPasswordForm from 'components/Form/ResetPasswordForm';
// import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

const ResetPassword = () => {
    // const router = useRouter();
    // const token = router.query.token?.toString();
    // const email = router.query.email?.toString();

    return (
        <>
            <Head>
                <title>Butik</title>
            </Head>

            <ResetPasswordForm email={'example@gmail.com'} />
        </>
    );
};

ResetPassword.defaultProps = {};

export default React.memo(ResetPassword);
