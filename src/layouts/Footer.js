import * as React from 'react';
import Badges from '../components/Badges.js';
import SubBanner from '../components/SubBanner.js';

const Footer = () => {
    return (
        <React.Fragment>
            <SubBanner />
            <div id="connect">
                <Badges />
            </div>
        </React.Fragment>
    );
}

export default Footer;
