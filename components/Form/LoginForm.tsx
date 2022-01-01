import React from 'react';

export interface Props {}

const LoginForm = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="border rounded-lg shadow-lg p-5">
                <p>Welcome to Butik! 👋</p>
                <p>Please sign-in to your account and start the adventure</p>
            </div>
        </div>
    );
};

export default React.memo(LoginForm);
