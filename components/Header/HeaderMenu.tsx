import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
export interface HeaderProps {
    text: string;
    location: string;
}

const HeaderMenu = (props: HeaderProps) => {
    const { text, location } = props;
    const router = useRouter();
    const active = router.pathname === location;

    return (
        <Link href={location}>
            <p
                className={clsx(
                    'mr-9 hover:text-pink cursor-pointer',
                    active ? 'text-pink' : 'text-textBlack'
                )}>
                {text}
            </p>
        </Link>
    );
};

HeaderMenu.defaultProps = {
    textSizeLabel: 'sm',
    textColorLabel: 'gray-700',
    marginBottomLabel: '1',
    withFormik: false
};

export default React.memo(HeaderMenu);
