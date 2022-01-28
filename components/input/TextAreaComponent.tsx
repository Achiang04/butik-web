import clsx from 'clsx';
import FormikWrapper from 'components/Formik/FormikWrapper';
import React, { useCallback } from 'react';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface TextAreaProps {
    name?: string;
    id?: string;
    placeholder?: string;
    heightSize?: string;
    paddingXSize?: string;
    paddingYSize?: string;
    roundedSize?: string;
    textSize?: string;
    textColor?: string;
    placeholderColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    value?: string;
    onChange?: (val: string) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
    withBorder?: boolean;
}

const TextAreaComponent = ({
    id,
    name,
    placeholder,
    value,
    onBlur,
    backgroundColor,
    borderColor,
    heightSize,
    onChange,
    onFocus,
    paddingXSize,
    paddingYSize,
    placeholderColor,
    roundedSize,
    textColor,
    textSize,
    withBorder
}: TextAreaProps) => {
    return (
        <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={(e) => onBlur && onBlur(e)}
            onFocus={(e) => onFocus && onFocus(e)}
            className={clsx(
                `
                w-full
                h-${heightSize}
                px-${paddingXSize}
                py-${paddingYSize}
                text-${textSize}
                text-${textColor}
                placeholder-${placeholderColor}
                bg-${backgroundColor}
                focus:outline-none
                `,
                roundedSize && `${roundedSize}`,
                withBorder && 'border',
                borderColor && `border-${borderColor}`
            )}
        />
    );
};

TextAreaComponent.defaultProps = {
    heightSize: '40',
    paddingXSize: '3.5',
    paddingYSize: '3.5',
    textSize: 'base',
    placeholderColor: 'softGray',
    textColor: 'black',
    roundedSize: 'rounded-sm',
    borderColor: 'borderGray',
    withBorder: true
};

export interface FormBaseInputProps extends TextAreaProps {
    withFormik: boolean;
}

const TextAreaForm = (props: FormBaseInputProps): JSX.Element => {
    const { name, withFormik, onBlur, onFocus } = props;
    if (!withFormik) {
        return <TextAreaComponent {...props} />;
    }
    const handleOnBlur = useCallback(
        (handleChange) => (event) => {
            handleChange.setTouched(true);
            onBlur && onBlur(event);
        },
        [onBlur]
    );

    const handleOnFocus = useCallback(
        (event) => {
            onFocus && onFocus(event);
        },
        [onFocus]
    );

    return (
        <FormikWrapper name={name}>
            {({ field, handleChange }) => {
                return (
                    <TextAreaComponent
                        {...props}
                        value={field.value}
                        onChange={handleChange.setValue}
                        onBlur={handleOnBlur(handleChange)}
                        onFocus={handleOnFocus}
                    />
                );
            }}
        </FormikWrapper>
    );
};

export default React.memo(TextAreaForm);
