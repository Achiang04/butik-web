import { FieldHelperProps, FieldInputProps, FieldMetaProps, useField } from 'formik';
import { isNil } from 'ramda';
import React from 'react';
import Fade from 'react-reveal/Fade';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface FieldProps<Val = any> {
    field: FieldInputProps<Val>;
    meta: FieldMetaProps<Val>;
    handleChange: FieldHelperProps<Val>;
}

interface Props {
    children: (field: FieldProps) => React.ReactNode;
    name: string;
}

const FormikWrapper = (props: Props) => {
    const { children } = props;
    const [field, meta, handleChange] = useField(props);
    return (
        <>
            {children({ field, meta, handleChange })}
            <Fade bottom collapse when={meta.touched && !isNil(meta.error)}>
                <div className="mt-2 text-sm text-red-600 block">{meta.error ?? 'Error'}</div>
            </Fade>
        </>
    );
};

FormikWrapper.defaultProps = {};

export default React.memo(FormikWrapper);
