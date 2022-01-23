import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { isNil } from 'ramda';
import React, { Fragment } from 'react';

export interface Props {
    data: Array<string>;
}

const Dropdown = ({ data }: Props) => {
    const router = useRouter();
    const active = router.pathname;

    return (
        <Menu as="div" className="relative text-left">
            <Menu.Button>
                <div className="border border-pink rounded bg-pink shadow-md px-1.5 py-1.5 mr-2 flex items-center cursor-pointer">
                    <img className="w-6 h-6" src="/img/user_icon.png" alt="icon" />
                </div>
            </Menu.Button>
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
                                <Link href={`/${e.toLowerCase()}`}>
                                    <a
                                        className={clsx(
                                            'group flex rounded items-center w-full px-2 py-2 text-sm hover:bg-pink hover:text-white cursor-pointer',
                                            `/${e.toLowerCase()}` === active
                                                ? 'bg-pink text-white'
                                                : 'text-gray-900'
                                        )}>
                                        {e}
                                    </a>
                                </Link>
                            </Menu.Item>
                        ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

Dropdown.defaultProps = {};

export default React.memo(Dropdown);
