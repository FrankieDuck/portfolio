import { Box, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import ImageWineCollection from './ImageWineCollection';

export default function PubCrawl() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90vh', gap: 4, padding: '20px' }}>
            <Box sx={{ flex: 1, width: '90vw', maxWidth: '90%', textAlign: 'center' }}>
                <Typography variant="h2" sx={{ marginBottom: 2 }}>
                    Pub Crawl
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: 3 }}>
                    A PERN based project. This project focused on learning PostGreSQL and using the React Leaflet library to develop an application that allows users to create a pub-crawl route based on their location.
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: 3 }}>
                    Main technologies here are TypeScript, React, Next.js, Node.js, PostgreSQL, ElephantSQL, Material-UI, Leaflet, and using Vercel for deployment.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 8 }}>
                    <Button variant="contained" color="primary" endIcon={<GitHubIcon />} href='https://github.com/FrankieDuck/Pub-Crawl' target='_blank'>
                        View Code
                    </Button>
                    <Button variant="contained" color="secondary" endIcon={<SportsBarIcon />}>
                        Live App
                    </Button>
                </Box>
                <ImageWineCollection />
            </Box>
        </Box>
    );
}
