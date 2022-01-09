import { SearchIcon } from '@heroicons/react/solid';
import BaseInput from 'components/input/BaseInput';
import { Formik } from 'formik';
import React from 'react';

const SearchComponent = () => {
    return (
        <Formik
            onSubmit={(values) => {
                console.log('values', values);
            }}
            initialValues={{
                search: ''
            }}>
            {(props) => {
                const { handleSubmit, isSubmitting } = props;
                return (
                    <div className="flex border border-borderSoftgray items-center rounded">
                        <BaseInput
                            placeholder="Search here ..."
                            type="text"
                            name="search"
                            withFormik
                            withBorder={false}
                            heightSize="8.5"
                            textColor="textSoftGray"
                        />
                        <button className="-ml-7 mr-0.5 flex items-center justify-center w-10 h-8">
                            <SearchIcon className="w-5 h-5" />
                        </button>
                    </div>
                );
            }}
        </Formik>
    );
};

SearchComponent.defaultProps = {};

export default React.memo(SearchComponent);
