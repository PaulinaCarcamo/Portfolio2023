import * as React from 'react';
import { Grid, ListItem, Typography } from '@mui/material';
import styled from '@emotion/styled';
import AOS from 'aos';

import { logos } from '../data/techlogos.js';

const Box = styled('div')({
    backgroundImage: 'linear-gradient(#E1E1E1, #fff)',
});

const LogosGrid = () => {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Box>
            <Typography sx={{
                display: 'flex',
                py: 5,
                px: { xs: 2, sm: 2, md: 0 },
                backgroundColor: '#DCDCDC',
                justifyContent: 'center',
                color: '#5E5E5E',
                letterSpacing: '.5rem',
                fontSize: { xs: '.8rem', md: '1rem' }
            }}>
                <h2>These are some of the techologies I've been working with</h2>
            </Typography>

            {/* <div id="profile"> */}
            <Grid container
                spacing={{ xs: 0, sm: 1, md: 3 }}
                columns={{ xs: 10, sm: 20, md: 20 }}
                sx={{
                    paddingTop: { xs: 2, sm: 2, md: 6 },
                    paddingBottom: { xs: 3, sm: 3, md: 6 }
                }}
            >
                {logos.map(item => (
                    <Grid item xs={2} sm={4} md={4}>
                        <ListItem sx={{
                            display: { xs: 'none', sm: 'none', md: 'flex' },
                            justifyContent: 'center',
                        }}>
                            <div data-aos="zoom-in">
                                <img src={item.img} style={{ maxHeight: '10vh' }} alt="img"></img>
                            </div>
                        </ListItem>

                        <ListItem sx={{
                            display: { xs: 'flex', sm: 'flex', md: 'none' },
                            justifyContent: 'center',
                        }}>
                            <div data-aos="zoom-in">
                                <img src={item.img} style={{ maxHeight: '6vh' }} alt="img"></img>
                            </div>
                        </ListItem>

                    </Grid>
                ))}
            </Grid>
            {/* </div> */}
        </Box>
    );
}

export default LogosGrid;