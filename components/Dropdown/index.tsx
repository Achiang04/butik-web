import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { isNil } from 'ramda';
import React, { Fragment, useCallback, useState } from 'react';

export interface Props {
    data: Array<string>;
}

const Dropdown = ({ data }: Props) => {
    const [selected, setSelected] = useState(data[0]);

    const handleSelect = useCallback(
        (e) => () => {
            setSelected(e);
        },
        []
    );

    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full px-3 py-1.5 text-sm text-textSoftGray rounded bg-opacity-20 border border-borderSoftGray hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        {selected}
                        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {!isNil(data) &&
                            data.map((e, i) => (
                                <Menu.Item key={i}>
                                    <button
                                        className={clsx(
                                            'group flex rounded items-center w-full px-2 py-2 text-sm hover:bg-violet hover:text-white',
                                            e === selected
                                                ? 'bg-purple text-white'
                                                : 'text-gray-900'
                                        )}
                                        onClick={handleSelect(e)}>
                                        {e}
                                    </button>
                                </Menu.Item>
                            ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

Dropdown.defaultProps = {};

export default React.memo(Dropdown);
