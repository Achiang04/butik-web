import clsx from 'clsx';
import TextAreaComponent from 'components/input/TextAreaComponent';
import TextInput from 'components/input/TextInput';
import { Formik } from 'formik';
import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is Required'),
    subtitle: Yup.string().required('Subtitle is Required'),
    discount_off: Yup.string().required('Discount % Off is Required'),
    description: Yup.string().required('Description is Required')
});

const ImageConfig = {
    default: '/img/file-blank.png',
    pdf: '/img/file-pdf.png',
    png: '/img/file-png.png',
    css: '/img/file-css.png'
};

const HeaderProduct = () => {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);

    const onDragEnter = useCallback(
        () => wrapperRef.current.classList.add('dragover'),
        [wrapperRef]
    );

    const onDragLeave = useCallback(
        () => wrapperRef.current.classList.remove('dragover'),
        [wrapperRef]
    );

    const onDrop = useCallback(() => wrapperRef.current.classList.remove('dragover'), [wrapperRef]);

    const onFileDrop = useCallback(
        (e) => {
            const newFile = e.target.files[0];
            if (newFile) {
                const updatedList = [newFile];
                setFileList(updatedList);
            }
        },
        [fileList]
    );

    const fileRemove = useCallback(() => {
        setFileList([]);
    }, []);

    return (
        <Formik
            onSubmit={(values) => {
                console.log('values', values);
            }}
            initialValues={{
                title: '',
                subtitle: '',
                discount_off: '',
                description: ''
            }}
            validationSchema={validationSchema}>
            {(props) => {
                const { handleSubmit, isSubmitting } = props;
                return (
                    <div>
                        <div className="flex items-center">
                            <div className="mt-5 w-1/2">
                                <div
                                    ref={wrapperRef}
                                    className="drop-file-input h-60"
                                    onDragEnter={onDragEnter}
                                    onDragLeave={onDragLeave}
                                    onDrop={onDrop}>
                                    <div className="drop-file-input__label text-softGray text-base">
                                        <img src="/img/upload.png" alt="icon" />
                                        <p>Drag and Drop your image here</p>
                                    </div>
                                    <input type="file" value="" onChange={onFileDrop} />
                                </div>
                            </div>
                            <div className={clsx('ml-5 pr-5 w-1/2 h-60')}>
                                {fileList.length > 0 && (
                                    <div className="drop-file-preview w-full">
                                        {fileList.map((item, index) => (
                                            <div
                                                key={index}
                                                className={clsx('drop-file-preview__item')}>
                                                <img
                                                    src={
                                                        ImageConfig[item.type.split('/')[1]] ||
                                                        ImageConfig['default']
                                                    }
                                                    alt="icon"
                                                />
                                                <div className="drop-file-preview__item__info">
                                                    <p>{item.name}</p>
                                                    <p>{item.size}B</p>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="drop-file-preview__item__del"
                                                    onClick={fileRemove}>
                                                    x
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-5">
                            <TextInput
                                label="Title"
                                placeholder="Enter your product title"
                                type="text"
                                name="title"
                                withFormik
                            />
                            <div className="my-2">
                                <TextInput
                                    label="Subtitle"
                                    placeholder="Enter your product subtitle"
                                    type="text"
                                    name="subtitle"
                                    withFormik
                                />
                            </div>
                            <div>
                                <TextInput
                                    label="Discount % off"
                                    placeholder="Enter your product discount % off"
                                    type="number"
                                    name="discount_off"
                                    withFormik
                                />
                            </div>
                            <div className="mt-2">
                                <p className="text-base text-softGray">Description</p>
                                <TextAreaComponent
                                    placeholder="Enter your product description"
                                    name="description"
                                    withFormik
                                />
                            </div>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

HeaderProduct.defaultProps = {};

export default React.memo(HeaderProduct);
