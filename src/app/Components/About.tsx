import Image from 'next/image';
import { Box, Typography } from '@mui/material';

export default function AboutMeSection() {
    return (
        <Box style={styles.container}>
            <Box style={styles.textContainer}>
            <Typography style={styles.paragraph}>
    As a passionate front-end developer, my journey has been shaped by a commitment to not only mastering the aesthetics of web design
    but also understanding the intricate workflows of full-stack development.
    Here, you&#39;ll find a selection of my current projects, each reflecting my desire to explore new technologies.
    My aim has always been to develop applications that can eventually transition into mobile platforms,
    ensuring accessibility and usability across devices.
</Typography>
<Typography style={styles.paragraph}>
    The first two projects showcased here are full-stack applications. Taking this approach was crucial for me as it allowed me to gain hands-on experience with databases and API development, strengthening my skills and confidence as a developer.
    The third project is a work-in-progress focusing on exploring artificial intelligence and OPENAI&#39;s APIs.
    By incorporating AI into my project, I aim to create an interactive experience that enhances comprehension and engagement in an educational setting.
</Typography>

            </Box>
            <Box style={styles.imageContainer}>
                <Image
                    src="/images/skills.png"
                    alt="Description of image"
                    width={600}
                    height={600}
                    objectFit='cover'
                />
            </Box>
        </Box>
    );
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 auto',
        width: '90vw',
        maxWidth: '90%',
        padding: '20px',
        paddingBottom: '300px'
    },
    textContainer: {
        flex: 1,
    },
    paragraph: {
        fontSize: '22px',
        lineHeight: '1.6',
        paddingBottom: '20px'
    },
    imageContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        maxHeight: '100%',
        maxWidth: '100%',
        objectFit: 'cover',
    },
};
