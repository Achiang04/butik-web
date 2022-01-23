import clsx from 'clsx';
import TextInput from 'components/input/TextInput';
import { Formik } from 'formik';
import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';

const data = [
    {
        id: 1,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        active: false
    },
    {
        id: 2,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        active: false
    },
    {
        id: 3,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        active: false
    },
    {
        id: 4,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        active: false
    },
    {
        id: 5,
        img: '/img/image1.png',
        name: 'Vel elit euismod',
        color: 'White',
        size: 'XL',
        price: '13.000',
        active: false
    }
];

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
    const [collectionData, setCollectionData] = useState(data);

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

    const handleActiveProduct = useCallback(
        (id) => () => {
            console.log('handleActiveProduct');
            const temp = collectionData.find((e) => e.id === id);
            const tempIndex = collectionData.findIndex((e) => e.id === id);
            const newData = { ...temp, active: true };
            const newCollectionData = [...collectionData];
            newCollectionData[tempIndex] = newData;
            setCollectionData(newCollectionData);
        },
        [collectionData]
    );

    const handleDisactiveProduct = useCallback(
        (id) => () => {
            console.log('handleDisactiveProduct');
            const temp = collectionData.find((e) => e.id === id);
            const tempIndex = collectionData.findIndex((e) => e.id === id);
            const newData = { ...temp, active: false };
            const newCollectionData = [...collectionData];
            newCollectionData[tempIndex] = newData;
            setCollectionData(newCollectionData);
        },
        [collectionData]
    );

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
                        <p className="text-2xl font-bold mb-5">Add Trending Collection</p>
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
                            <div className="mt-5">
                                <p className="mb-3 text-xl font-bold">
                                    Add product to this collection
                                </p>
                                <table className="w-full">
                                    <thead>
                                        <tr className="flex text-xl text-textDarkPurple mb-10">
                                            <th className="w-2/4 flex">Product</th>
                                            <th className="w-1/4 flex">Price</th>
                                            <th className="w-1/4 flex">Select</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {collectionData.map((e, i) => {
                                            return (
                                                <tr
                                                    key={i}
                                                    className="flex  w-full bg-white shadow-md p-3 items-center mt-5 rounded">
                                                    <td className="flex items-center w-2/4">
                                                        <img
                                                            className="w-20 h-20"
                                                            src={e.img}
                                                            alt="product"
                                                        />
                                                        <div className="ml-3">
                                                            <p className="text-sm">{e.name}</p>
                                                            <p className="text-sm text-textProductCartGray">
                                                                Color: {e.color}
                                                            </p>
                                                            <p className="text-xs text-textProductCartGray">
                                                                Size: {e.size}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="w-1/4 flex">
                                                        <p className="text-sm text-softGray">
                                                            Rp. {e.price}
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            checked={e.active}
                                                            onChange={
                                                                e.active
                                                                    ? handleDisactiveProduct(e.id)
                                                                    : handleActiveProduct(e.id)
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
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
