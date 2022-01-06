import clsx from 'clsx';
import { isNil } from 'ramda';
import React, { useCallback, useState } from 'react';

interface TabData {
    id: number;
    title: string;
    content: string;
}

interface TabsProps {
    tabData: Array<TabData>;
}

const Tabs = ({ tabData }: TabsProps) => {
    const [active, setActive] = useState(0);

    const handleActive = useCallback(
        (index) => () => {
            setActive(index);
        },
        []
    );

    return (
        <div>
            {!isNil(tabData) &&
                tabData.map((e, i) => {
                    return (
                        <button
                            key={e.id}
                            onClick={handleActive(i)}
                            className={clsx(
                                'mr-20 text-textPurple text-2xl',
                                i === active && 'underline'
                            )}>
                            <p className="font-medium">{e.title}</p>
                        </button>
                    );
                })}
            {!isNil(tabData) &&
                tabData.map((e, i) => {
                    return (
                        active === i && (
                            <div className="mt-5">
                                <p className="text-shopDetailDesc text-base">{e.content}</p>
                            </div>
                        )
                    );
                })}
        </div>
    );
};

Tabs.defaultProps = {};

export default React.memo(Tabs);
