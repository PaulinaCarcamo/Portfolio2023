import * as React from 'react';
import IconsList from '../components/IconsList.js';
import LogosGrid from '../components/LogosGrid.js';
import TextGrid from '../components/TextGrid.js';

const Profile = () => {
    return (
        <React.Fragment>
            <LogosGrid />
            <TextGrid />
            <IconsList />
        </React.Fragment>
    );
}

export default Profile;
