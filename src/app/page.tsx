'use client'
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';
import Contact from "./Components/Contact";
import AboutMeSection from "./Components/About";
import PubCrawl from "./Components/PubCrawl"
import FrenchBot from "./Components/FrenchBot";
import Header from "./Components/Banner";
import WineCellar from "./Components/WineCellar";
import Duck from "./Components/Duck";
import ParticlesSlowBackground from './Components/ParticlesSlowBackground';

const theme = createTheme({
  typography: {
    fontFamily: "'Oswald', sans-serif",
    allVariants: {
      color: '#F6D611',
    },
    h1: {
      fontSize: '180px',
      fontWeight: 700,
      letterSpacing: '-2px',
    },
    h2: {
      fontWeight: 500,
      fontSize: '160px',
      letterSpacing: '-1px',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.5px',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
  spacing: 8,
});


export default function Home() {
  const [duckToggle, setDuckToggle] = useState(false);

  const handleDuckAnimationEnd = () => {
    setDuckToggle(true);
  };
  //
  return (
    <ThemeProvider theme={theme}>
      {/* <ParticlesSlowBackground /> */}

      <Box className="flex-container">
        {!duckToggle ? (
          <Box className="flex-center" style={{ width: "100%", height: "100vh" }}>
            <Duck onAnimationEnd={handleDuckAnimationEnd} />
          </Box>
        ) : (
          <>
            <Box id="home-section" className="home-section">
              <Typography variant="h1">FRANKIE DUCK</Typography>
              <Typography variant="h2">FRONT END ENGINEER</Typography>
              <ScrollLink to="about-section" smooth={true} duration={500}>
                <Button className="work-button" variant="contained">
                  WORK
                </Button>
              </ScrollLink>
            </Box>

            <Box id="about-section" className="about-section">
              <Header />
              <Typography variant="h1">About</Typography>
              <Box className="about-section-inner">
                <AboutMeSection />
              </Box>

              <Box id="projects-section" className="projects-section">
                <WineCellar />
                <PubCrawl />
              </Box>

              <Box id="contact-section" className="contact-section">
                <Contact />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}