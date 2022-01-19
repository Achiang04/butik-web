import clsx from 'clsx';
import TextAreaComponent from 'components/input/TextAreaComponent';
import TextInput from 'components/input/TextInput';
import { Formik } from 'formik';
import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is Required'),
    subtitle: Yup.string().required('Subtitle is Required'),
    description1: Yup.string().required('Description is Required')
});

const ImageConfig = {
    default: '/img/file-blank.png',
    pdf: '/img/file-pdf.png',
    png: '/img/file-png.png',
    css: '/img/file-css.png'
};

const UniqueProduct = () => {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const [descriptionCount, setDescriptionCount] = useState(1);

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

    const handleAddDescList = useCallback(() => {
        setDescriptionCount(descriptionCount + 1);
    }, [descriptionCount]);

    const handleMinesDescList = useCallback(() => {
        setDescriptionCount(descriptionCount - 1);
    }, [descriptionCount]);

    return (
        <Formik
            onSubmit={(values) => {
                console.log('values', values);
            }}
            initialValues={{
                name: '',
                price: '',
                description1: '',
                description2: '',
                description3: ''
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
                                label="Name"
                                placeholder="Enter your product Name"
                                type="text"
                                name="name"
                                withFormik
                            />
                            <div className="my-2">
                                <TextInput
                                    label="Price"
                                    placeholder="Enter your product price"
                                    type="text"
                                    name="price"
                                    withFormik
                                />
                            </div>
                            {new Array(descriptionCount).fill(0).map((e, i) => {
                                return (
                                    <div key={i} className="flex items-center">
                                        <div className="w-full">
                                            <TextInput
                                                label="List Description"
                                                placeholder="Enter your product description"
                                                type="text"
                                                name={`description${i + 1}`}
                                                withFormik
                                            />
                                        </div>
                                        {i <= 1 && (
                                            <button
                                                type="button"
                                                onClick={handleAddDescList}
                                                className="w-6 h-6 rounded-full flex items-center justify-center bg-pink ml-5 mt-5">
                                                <p className="text-white">+</p>
                                            </button>
                                        )}
                                        {i >= 1 && (
                                            <button
                                                type="button"
                                                onClick={handleMinesDescList}
                                                className="w-6 h-6 rounded-full flex items-center justify-center bg-pink ml-5 mt-5">
                                                <p className="text-white">x</p>
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

UniqueProduct.defaultProps = {};

export default React.memo(UniqueProduct);
