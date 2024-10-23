import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ArrowProps {
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        style={{
            ...arrowStyle,
            left: '10px',
        }}
    >
        &#10094;
    </div>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        style={{
            ...arrowStyle,
            right: '10px',
        }}
    >
        &#10095;
    </div>
);


const arrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '30px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
};

interface CustomDotProps {
    onClick?: () => void;
    active?: boolean;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => (
    <button
        onClick={onClick}
        style={{
            background: active ? 'white' : 'rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
            width: '10px',
            height: '10px',
            margin: '0 5px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
        }}
    />
);

const ImageWineCollection: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        appendDots: (dots: React.ReactNode) => (
            <div style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
                <ul style={{ margin: '0px' }}>{dots}</ul>
            </div>
        ),
        customPaging: (i: number) => <CustomDot onClick={() => { }} active={false} />,
    };

    return (
        <Box sx={{ maxWidth: '90vw', margin: '0 auto' }}>
            <Slider {...settings}>
                <div>
                    <img
                        src="/images/wine-cellar/winehome.png"
                        alt="Wine Home"
                        style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <img
                        src="/images/wine-cellar/Collection.png"
                        alt="Wine Collection"
                        style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <img
                        src="/images/wine-cellar/dynamiccharts.png"
                        alt="Dynamic Charts"
                        style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <img
                        src="/images/wine-cellar/withcharts.png"
                        alt="With Charts"
                        style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
                    />
                </div>
            </Slider>
        </Box>
    );
};

export default ImageWineCollection;
