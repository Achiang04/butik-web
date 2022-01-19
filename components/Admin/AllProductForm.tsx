import clsx from 'clsx';
import TextAreaComponent from 'components/input/TextAreaComponent';
import TextInput from 'components/input/TextInput';
import { Formik } from 'formik';
import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    price: Yup.string().required('Price is Required'),
    discount_price: Yup.string().required('Discount Price is Required'),
    product_color: Yup.string().required('Product Color is Required'),
    categories: Yup.string().required('Categories is Required'),
    tags: Yup.string().required('Tags is Required'),
    description: Yup.string().required('Description is Required')
});

const ImageConfig = {
    default: '/img/file-blank.png',
    pdf: '/img/file-pdf.png',
    png: '/img/file-png.png',
    css: '/img/file-css.png'
};

const AllProduct = () => {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    console.log('🚀 ~ file: AllProductForm.tsx ~ line 23 ~ AllProduct ~ fileList', fileList);

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
                const updatedList = [...fileList, newFile];
                setFileList(updatedList);
            }
        },
        [fileList]
    );

    const fileRemove = useCallback(
        (file) => {
            const updatedList = [...fileList];
            updatedList.splice(fileList.indexOf(file), 1);
            setFileList(updatedList);
        },
        [fileList]
    );

    return (
        <Formik
            onSubmit={(values) => {
                console.log('values', values);
            }}
            initialValues={{
                name: '',
                price: '',
                discount_price: '',
                product_color: '',
                categories: '',
                tags: '',
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
                                label="Name"
                                placeholder="Enter your product name"
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
                            <TextInput
                                label="Discount Price"
                                placeholder="Enter your product discount price"
                                type="text"
                                name="discount_price"
                                withFormik
                            />
                            <div className="my-2">
                                <TextInput
                                    label="Color"
                                    placeholder="Enter your product color"
                                    type="text"
                                    name="product_color"
                                    withFormik
                                />
                            </div>
                            <TextInput
                                label="Categories"
                                placeholder="Enter your product categories"
                                type="text"
                                name="categories"
                                withFormik
                            />
                            <div className="my-2">
                                <TextInput
                                    label="Tags"
                                    placeholder="Enter your product tags"
                                    type="text"
                                    name="tags"
                                    withFormik
                                />
                            </div>
                            <div>
                                <p className="my-2 text-base text-softGray">Description</p>
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

AllProduct.defaultProps = {};

export default React.memo(AllProduct);
