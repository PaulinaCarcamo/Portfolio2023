import * as React from 'react';
import { styled } from '@mui/material/styles';
import { MailOutline, WhatsApp } from '@mui/icons-material';
import { Button, Grid, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import { contact } from '../data/contact.js';
import { badges } from '../data/badges.js'

const Box = styled('div')({
    backgroundImage: 'linear-gradient(#4B4453, #000)',
});

const ItemsBox = styled('div')({
    display: 'flex',
    justifyContent: 'right',
    alignContent: 'right',
    alignItems: 'right',
    justifyItems: 'right',
    gap: '1rem',
    color: '#fff'
});

const TextItem = styled('div')({
    color: '#B0B0B0',
    marginBottom: '2rem',
    letterSpacing: '.1rem',
});

const ImgItem = styled('div')({
    transition: 'all 0.5s ease-out',
    ":hover": { transform: 'scale(1.1)' },
    cursor: 'pointer'
});

const BtnItem = styled('div')({
    display: 'flex',
    gap: '.5rem',
});

const Badges = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Box
            sx={{
                px: { xs: 1, md: 16 },
                pt: { xs: 4, md: 16 },
                pb: { xs: 8, sm: 12, md: 20 }
            }}
        >
            <TextItem sx={{ px: { xs: 1, md: 0 } }}><h2>CONNECT WITH ME</h2></TextItem>

            {contact.map((item) => (

                <ListItem sx={{
                    display: { xs: 'block', sm: 'flex', md: 'flex' },
                    flexDirection: { xs: 'none', sm: 'row', md: 'row' },
                    gap: '1rem',
                    my: { xs: 1, md: 2 },
                    px: { xs: 1, md: 0 }
                }}>

                    <Link to={(`https://wa.me/${item.numb}?text=${item.msg}`)}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button variant='outlined' sx={{
                            border: '1px solid #009688',
                            color: '#009688',
                            fontSize: { xs: '.8rem', md: '1rem' },
                            transition: 'all 0.5s ease-out',
                            ":hover": {
                                transform: 'scale(1.05)',
                                border: '1px solid #009688',
                                color: '#009688',
                                backgroundColor: 'transparent'
                            },
                        }}>
                            <BtnItem>
                                <WhatsApp />
                                <p>SEND ME A MESSAGE</p>
                            </BtnItem>
                        </Button>
                    </Link>

                    <Link to={(`mailto:${item.mail}?subject=${item.msg}&body=${item.desc}`)}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button variant='outlined' sx={{
                            transition: 'all 0.5s ease-out',
                            ":hover": {
                                transform: 'scale(1.05)',
                                border: '1px solid #BEA6A0', color: '#BEA6A0',
                                backgroundColor: 'transparent'
                            },
                            border: '1px solid #BEA6A0', color: '#BEA6A0',
                            fontSize: { xs: '.8rem', md: '1rem' },
                            my: { xs: '1rem', md: 0 },
                        }}>
                            <BtnItem >
                                <MailOutline />
                                <p>SEND ME AN EMAIL</p>
                            </BtnItem>
                        </Button>
                    </Link>
                </ListItem>
            ))}

            <Grid container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 4, sm: 6, md: 12 }}
            >
                {badges.map((item) =>
                    <Grid item xs={4} md={4} >
                        <ItemsBox>
                            <div data-aos="zoom-in-up">
                                <Link to={item.url}>
                                    <ImgItem>
                                        <img src={item.img} style={{ maxHeight: '8vh' }} alt="img"></img>
                                    </ImgItem>
                                </Link>
                            </div>
                            <TextItem>
                                <p>{item.desc}</p>
                            </TextItem>
                        </ItemsBox>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default Badges;