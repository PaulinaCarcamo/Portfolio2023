import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import { logos } from '../data/sublogos.js';

const Box = styled('div')({
    backgroundImage: 'linear-gradient(#DCDCDC, #C6C6C6 )'
});

const Item = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',
    color: '#5E5E5E',
    letterSpacing: '.5rem',
});

const SubBanner = () => {
    return (
        <div>
            <Box>
                <Item sx={{
                    px: { xs: 2, md: 0 },
                    backgroundColor: '#DCDCDC',
                    height: { xs: '10vh', md: '2vh' },
                    fontSize: { xs: '.7rem', md: '1rem' }
                }}>
                    <h2>Here you will find more information about my background</h2>
                </Item>

                <Grid container
                    spacing={{ xs: 0, sm: 0, md: 3 }}
                    columns={{ xs: 10, sm: 10, md: 20 }}
                >
                    {logos.map((item) =>
                        <Grid item xs={2} sm={2} md={4}
                        >
                            <Item sx={{
                                transition: 'all 0.5s ease-out',
                                ":hover": { transform: 'scale(1.1)' },
                                cursor: 'pointer'
                            }}>
                                <Link to={item.url}>
                                    <img src={item.img} style={{ maxHeight: '4vh' }} alt="img"></img>
                                </Link>
                            </Item>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>
    );
}

export default SubBanner;