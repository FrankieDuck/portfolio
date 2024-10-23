import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-scroll';

const pages = [
    { name: 'Home', id: 'home-section' },
    { name: 'About', id: 'about-section' },
    { name: 'Projects', id: 'projects-section' },
    { name: 'Contact', id: 'contact-section' }
];

export default function Header() {
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home-section');
            const homeSectionHeight = homeSection ? homeSection.clientHeight : 0;
            const scrollTop = window.scrollY;

            if (scrollTop > homeSectionHeight) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <AppBar position={fixed ? 'fixed' : 'relative'} sx={{ backgroundColor: '#272727', top: 0, left: 0, right: 0, }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        {pages.map(({ name, id }) => (
                            <Link
                                key={name}
                                to={id}
                                smooth={true}
                                duration={500}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    sx={{ my: 2, color: '#F6D611', display: 'block', fontSize: '1.5rem' }}
                                >
                                    {name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
