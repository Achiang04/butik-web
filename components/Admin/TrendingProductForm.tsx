import clsx from 'clsx';
import TextInput from 'components/input/TextInput';
import { Formik } from 'formik';
import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    collection_name: Yup.string().required('Collection name is Required'),
    collection_subtitle: Yup.string().required('Collection subtitle is Required')
});

const ImageConfig = {
    default: '/img/file-blank.png',
    pdf: '/img/file-pdf.png',
    png: '/img/file-png.png',
    css: '/img/file-css.png'
};

const TrendingProduct = () => {
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
                collection_name: '',
                collection_subtitle: ''
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
                            <div
                                className={clsx(
                                    'ml-5 pr-5 w-1/2 h-60',
                                    fileList.length > 2 && 'overflow-y-scroll'
                                )}>
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
                                                    onClick={() => fileRemove(item)}>
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
                                label="Collection Name"
                                placeholder="Enter your collection name"
                                type="text"
                                name="collection_name"
                                withFormik
                            />
                            <div className="mt-2">
                                <TextInput
                                    label="Subtitle"
                                    placeholder="Enter your collection subtitle"
                                    type="text"
                                    name="collection_subtitle"
                                    withFormik
                                />
                            </div>
                            <div>
                                <p>Choose product for this collection</p>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

TrendingProduct.defaultProps = {};

export default React.memo(TrendingProduct);
