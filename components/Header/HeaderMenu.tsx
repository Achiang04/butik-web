import React from 'react';

export interface HeaderProps {
    text: string;
}

const HeaderMenu = (props: HeaderProps) => {
    const { text } = props;
    return <button className="mr-9 text-textBlack hover:text-pink">{text}</button>;
};

HeaderMenu.defaultProps = {
    textSizeLabel: 'sm',
    textColorLabel: 'gray-700',
    marginBottomLabel: '1',
    withFormik: false
};

export default React.memo(HeaderMenu);
