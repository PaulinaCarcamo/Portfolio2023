import * as React from 'react';
import { styled } from '@mui/system';
import Header from '../layouts/Header.js';
import Profile from '../layouts/Profile.js';
import Projects from '../layouts/Projects.js';
import Footer from '../layouts/Footer.js';

const HomePage = styled('div')({
    margin: 0,
});

const Home = () => {
    return (
        <HomePage>
            <Header />
            <Profile />
            <Projects />
            <Footer />
        </HomePage>
    );
}

export default Home;