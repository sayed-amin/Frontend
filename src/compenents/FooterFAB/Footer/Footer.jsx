import React, { Fragment } from 'react'
import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';
import { Box } from '@mui/material';
import classes from './Footer.module.css';

const Footer = () => {

    const clickHandler = (link, name) => {
        window.open(link, '_blank');
    }

    return (
        <Fragment>
            <Box sx={{ borderBottom: '1.5px solid rgba(0,0,0,0.1)' }}>
                <span onClick={() => clickHandler("https://www.instagram.com/aminsayed01/", 'Instagram')}>
                    <Instagram className={classes.logos} />
                </span>
                <span onClick={() => clickHandler("https://github.com/sayed-amin", 'Github')}>
                    <GitHub className={classes.logos} />
                </span>
                <span onClick={() => clickHandler("https://www.linkedin.com/in/mohammed-amin-sayed/", 'LinkedIn')}>
                    <LinkedIn className={classes.logos} />
                </span>
                <span onClick={() => clickHandler("mailto:100xdevsreports@gmail.com", 'Mail')}>
                    <Mail className={classes.logos} />
                </span>
            </Box>
            <div>Copyright © {new Date().getFullYear()} All rights reserved</div>
            <div>Made with ❤️ by <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/mohammed-amin-sayed/" target="_blank" rel="noopener noreferrer">
                Sayed Amin
            </a></div>
            <div>Give this website a <a style={{ textDecoration: 'none' }} href="https://github.com/sayed-amin" target="_blank" rel="noopener noreferrer">
                ⭐ <span style={{ color: 'black' }}>on</span> GitHub
            </a></div>
        </Fragment>
    )
}

export default Footer;