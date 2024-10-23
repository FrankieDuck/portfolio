import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const Duck: React.FC<{ onAnimationEnd: () => void }> = ({ onAnimationEnd }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if (isClicked) {
            const timeout = setTimeout(() => {
                onAnimationEnd();
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [isClicked, onAnimationEnd]);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <Box
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleClick}
            style={styles.container}
        >
            <Image
                src="/images/duck.png"
                alt="intro duck"
                width={600}
                height={600}
                style={{
                    ...styles.image,
                    transform: isClicked ? "scale(3)" : isHovering ? "scale(1.1)" : "scale(1)",
                    opacity: isClicked ? 0 : 1,
                    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
            />
        </Box>
    );
};

const styles = {
    container: {
        backgroundColor: "#F6D611",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        cursor: "pointer",
    } as React.CSSProperties,
    image: {
        maxWidth: "100%",
        height: "auto",
    },
};

export default Duck;
