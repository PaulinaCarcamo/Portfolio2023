import * as React from 'react';
import { Box } from '@mui/system';
import TopNav from '../components/TopNav.js';
import Hero from '../components/Hero.js';

const Header = () => {
    return (
        <React.Fragment>
            <Box sx={{ minHeight: {xs: 0, md: '100vh'} }}>
                <TopNav />
                <Hero />
            </Box>
        </React.Fragment>
    );
}

export default Header;
