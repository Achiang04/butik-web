import Footer from 'components/Footer';
import Header from 'components/Header';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useCallback, useRef, useState } from 'react';

const ImageConfig = {
    default: '/img/file-blank.png',
    pdf: '/img/file-pdf.png',
    png: '/img/file-png.png',
    css: '/img/file-css.png'
};

const Upload = () => {
    const wrapperRef = useRef(null);
    const router = useRouter();
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

    const handleOrderComplete = useCallback(() => {
        router.push('/order_complete');
    }, []);

    return (
        <>
            <Head>
                <title>Butik</title>
            </Head>

            <Header />

            <div className="flex flex-col items-center py-24">
                <div className="w-4/6 mt-20 flex flex-col items-center">
                    <div className="box w-180">
                        <h2 className="text-2xl self-center font-extrabold mb-5">Upload Payment</h2>

                        <div
                            ref={wrapperRef}
                            className="drop-file-input h-72"
                            onDragEnter={onDragEnter}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}>
                            <div className="drop-file-input__label text-softGray text-base">
                                <img src="/img/upload.png" alt="icon" />
                                <p>Drag and Drop your file here</p>
                            </div>
                            <input type="file" value="" onChange={onFileDrop} />
                        </div>
                        {fileList.length > 0 && (
                            <div className="drop-file-preview w-full">
                                <p className="drop-file-preview__title text-softGray font-semibold text-lg">
                                    Ready to upload
                                </p>
                                {fileList.map((item, index) => (
                                    <div key={index} className="drop-file-preview__item">
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
                                <button
                                    type="button"
                                    onClick={handleOrderComplete}
                                    className="py-3 px-9 rounded-md bg-pink text-white text-base font-bold mt-7 self-end">
                                    Submit
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

Upload.defaultProps = {};

export default React.memo(Upload);
