import React from 'react';
import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';
import { Box, Typography, Link } from '@mui/material';
import styles from './Footer.module.css';

const Footer = () => {
    const socialLinks = [
        { name: 'Instagram', link: 'https://www.instagram.com/aminsayed01/', icon: <Instagram /> },
        { name: 'GitHub', link: 'https://github.com/sayed-amin', icon: <GitHub /> },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mohammed-amin-sayed/', icon: <LinkedIn /> },
        { name: 'Mail', link: 'mailto:100xdevsreports@gmail.com', icon: <Mail /> },
    ];

    return (
        <Box className={styles.footerContainer}>
            {/* Social Media Links */}
            <Box className={styles.socialIcons}>
                {socialLinks.map(({ name, link, icon }) => (
                    <span
                        key={name}
                        onClick={() => window.open(link, '_blank')}
                        className={styles.logo}
                        aria-label={name}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && window.open(link, '_blank')}
                    >
                        {icon}
                    </span>
                ))}
            </Box>

            {/* Footer Text */}
            <Typography variant="body2" className={styles.footerText}>
                Copyright © {new Date().getFullYear()} All rights reserved.
            </Typography>
            <Typography variant="body2" className={styles.footerText}>
            Crafted with ❤️ and passion by{' '}
                <Link
                    href="https://www.linkedin.com/in/mohammed-amin-sayed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    underline='none'
                    sx={{ color: '#1976d2', fontWeight: 'bold' }}
                >
                    Sayed Amin
                </Link>
            </Typography>
            <Typography variant="body2" className={styles.footerText}>
                Give this Project a{' ⭐  on'}
                <Link
                    href="https://github.com/sayed-amin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    underline='none'
                    sx={{ color: '#1976d2', fontWeight: 'bold' }}
                >
                    <span style={{ color: 'black' }}></span> GitHub
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
