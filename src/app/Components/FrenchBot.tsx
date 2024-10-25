import { Box, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ImageWineCollection from './ImageWineCollection';

export default function FrenchBot() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90vh', gap: 4, padding: '20px' }}>
                <Box sx={{ flex: 1, width: '90vw', maxWidth: '90%', textAlign: 'center' }}>
                    <Typography variant="h2" sx={{ marginBottom: 2 }}>
                        French Bot - WIP
                    </Typography>
                    <Typography variant="h5" sx={{ marginBottom: 3 }}>
                        This project aimed to explore AI and how it can be used as an educational tool. The main focus for this application was how it could be embedded into a digital learning environment and support educators and learners.
                    </Typography>
                    <Typography variant="h5" sx={{ marginBottom: 3 }}>
                        This project utilized the Open AI API but also had a stronger focus on following the WCAG guidelines.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 8 }}>
                        <Button variant="contained" color="primary" endIcon={<GitHubIcon />} href='https://github.com/FrankieDuck/FrenchBot' target='_blank'>
                            View Code
                        </Button>
                    </Box>
                    <ImageWineCollection />
                </Box>
            </Box>
        </>
    );
}
