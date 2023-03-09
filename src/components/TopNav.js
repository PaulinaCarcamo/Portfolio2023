import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';

import { navlinks } from '../data/navlinks.js';

const Wrapper = styled('div')({
    backgroundColor: '#000',
});

const TopNav = () => {
    return (
        <Wrapper>
            <Container sx={{
                display: { xs: 'block', md: 'flex' },
                justifyContent: 'space-between',
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <div data-aos="fade-right">

                    <Typography
                        sx={{
                            mt: { xs: 2, md: 0 },
                            mx: { xs: 1, md: 2 },
                            // fontFamily: 'Mali',
                            color: 'inherit',
                            textDecoration: 'none',
                            backgroundImage: 'linear-gradient(45deg, #BEA6A0, #af4261)',
                            backgroundSize: '100%',
                            WebkitTextFillColor: 'transparent',
                            WebkitBackgroundClip: 'text',
                        }}
                    >
                        <h2>Paulina Cárcamo</h2>
                    </Typography>
                    </div>
                </Box>

                <Box sx={{
                    display: { xs: 'flex', md: 'flex' }
                }}>
                  
                    {navlinks.map((item) => (
                        <div data-aos="fade-left">
                        <Link to={item.id} spy={true} smooth={true} offset={50} duration={800}>
                            <Button
                                key={item.id}
                                sx={{
                                    my: 2, 
                                    mx: 1,
                                    color: 'white', 
                                    // display: 'block',
                                    // fontFamily: 'Blinker', 
                                    fontSize: '1.2rem',
                                    transition: 'all 0.5s ease-out',
                                    ":hover": {
                                        transform: 'scale(1.1)'
                                    },
                                }}
                            >
                                <h5>{item.title}</h5>

                            </Button>
                            
                        </Link>
                        </div>
                    ))}
                    
                </Box>

            </Container>
        </Wrapper>
    );
}

export default TopNav;
