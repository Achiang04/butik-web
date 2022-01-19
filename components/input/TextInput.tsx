import clsx from 'clsx';
import React from 'react';

import BaseInput, { FormBaseInputProps } from './BaseInput';

export interface TextInputProps extends FormBaseInputProps {
    label?: string;
    textSizeLabel?: string;
    textColorLabel?: string;
    marginBottomLabel?: string;
}

const TextInput = (props: TextInputProps) => {
    const { textColorLabel, textSizeLabel, marginBottomLabel, label } = props;
    return (
        <div>
            <label
                className={clsx(
                    `
                text-${textSizeLabel}
                text-${textColorLabel}
                block
                mb-${marginBottomLabel}`
                )}>
                {label}
            </label>
            <BaseInput {...props} withBorder={true} />
        </div>
    );
};

TextInput.defaultProps = {
    textSizeLabel: 'base',
    textColorLabel: 'softGray',
    marginBottomLabel: '2',
    withFormik: false
};

export default React.memo(TextInput);
