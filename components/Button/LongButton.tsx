import React from 'react';

export interface ButtonProps {}

const TextInput = () => {
    return (
        <button className="flex bg-yellow-400 text-white w-full justify-center px-4 py-2">
            Button
        </button>
    );
};

TextInput.defaultProps = {};

export default React.memo(TextInput);
