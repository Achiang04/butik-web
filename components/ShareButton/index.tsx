import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from 'next-share';
import React from 'react';

export interface ShareButtonProps {}

const ShareButton = () => {
    return (
        <div className="flex items-center">
            <div className="mx-1 -mb-2">
                <WhatsappShareButton url={''} title={'asdas'}>
                    <WhatsappIcon size={20} round />
                </WhatsappShareButton>
            </div>
            <div className="mx-1 -mb-2">
                <FacebookShareButton url={''} quote={'asdas'} hashtag={'#affluent'}>
                    <FacebookIcon size={20} round />
                </FacebookShareButton>
            </div>
            <div className="mx-1 -mb-2">
                <EmailShareButton url={''} subject={'asdas'}>
                    <EmailIcon size={20} round />
                </EmailShareButton>
            </div>
        </div>
    );
};

ShareButton.defaultProps = {};

export default React.memo(ShareButton);
