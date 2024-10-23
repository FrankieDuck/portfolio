import React, { useState } from 'react';
import { Stack, Box, TextField, Typography, Button } from '@mui/material';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_t6b7czl';
        const templateID = 'template_676q3ew';
        const publicKey = '0UywPajBrh6g4Aqyh';

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <Box sx={{ width: "80%" }}>
            <Stack component="form" spacing={2} onSubmit={handleSubmit}>
                <Typography variant='h2'>Contact</Typography>
                <Typography variant="h5">Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</Typography>
                <TextField
                    id="name"
                    label="Name"
                    variant="filled"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{
                        borderRadius: "4px",
                        backgroundColor: 'white',
                        color: 'black',
                        '& .MuiInputBase-input': {
                            color: 'black',
                        },
                        '& .MuiInputLabel-root': {
                            color: 'black',
                        },
                    }}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="filled"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                        borderRadius: "4px",
                        backgroundColor: 'white',
                        color: 'black',
                        '& .MuiInputBase-input': {
                            color: 'black',
                        },
                        '& .MuiInputLabel-root': {
                            color: 'black',
                        },
                    }}
                />
                <TextField
                    id="message"
                    label="Message"
                    variant="filled"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    sx={{
                        borderRadius: "4px",
                        backgroundColor: 'white',
                        color: 'black',
                        '& .MuiInputBase-input': {
                            color: 'black',
                        },
                        '& .MuiInputLabel-root': {
                            color: 'black',
                        },
                    }}
                />
                <Button type="submit" variant="contained" sx={{
                    color: "black", background: "white", '&:hover': {
                        backgroundColor: "#788e89",
                    }
                }} >
                    Send
                </Button>
            </Stack>
        </Box>
    );
}
