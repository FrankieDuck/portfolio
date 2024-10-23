import { Box, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import WineBarIcon from '@mui/icons-material/WineBar';
import ImageWineCollection from './ImageWineCollection';

export default function WineCellar() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90vh', gap: 4, padding: '20px' }}>
            <Box sx={{ flex: 1, width: '90vw', maxWidth: '90%', textAlign: 'center', }}>
                <Typography variant="h2" sx={{ marginBottom: 2, }}>
                    Wine Cellar
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: 3 }}>
                    A MERN based project. This project focused on learning MongoDB and creating a web-based application that could be adaptive to differsent sets of data.
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: 3 }}>
                    Main technologies here are TypeScript, React, Next.js, Node.js, MongoDB, Material-UI, and using Vercel for deployment.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 8 }}>
                    <Button variant="contained" color="primary" endIcon={<GitHubIcon />} href='https://github.com/FrankieDuck/wine-cellar' target='_blank'>
                        View Code
                    </Button>
                    <Button variant="contained" color="secondary" endIcon={<WineBarIcon />}>
                        Live App
                    </Button>
                </Box>
                <ImageWineCollection />
            </Box>
        </Box>
    );
}
