import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { messageActions } from '../../../store/Message/message-slice';
import { Menu, MenuItem } from '@mui/material';
import { Share, Note, Link, Description } from '@mui/icons-material';
import Nav from "react-bootstrap/Nav";
import { useNavigate } from 'react-router';

const ExtraMenu = ({ setExpand }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const menuItemStyle = {
        color: "#EAEAEA",
        backgroundColor: "#1E1E1E",
        '&:hover': { backgroundColor: "#333333" },
    };

    return (
        <Fragment>
            <Nav.Link className='myNavLink' onClick={handleClick} style={{ color: "#EAEAEA" }}>
                Extra
                <span className="dropdown-caret"></span>
            </Nav.Link>
            <Menu
                id="extra-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        bgcolor: "#1E1E1E",
                        color: "#EAEAEA",
                        mt: 1.5,
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "#1E1E1E",
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => navigate('/notes')} sx={menuItemStyle}>
                    <Note sx={{ marginRight: '8px', color: "#EAEAEA" }} />
                    Notes
                </MenuItem>
                <MenuItem onClick={() => dispatch(messageActions.set({ type: 'warning', message: 'This feature is not available yet!' }))} sx={menuItemStyle}>
                    <Share sx={{ marginRight: '8px', color: "#EAEAEA" }} />
                    Get Short Link
                </MenuItem>
                <MenuItem onClick={() => navigate('/linkShortner')} sx={menuItemStyle}>
                    <Link sx={{ marginRight: '8px', color: "#EAEAEA" }} />
                    Link Shortener
                </MenuItem>
                <MenuItem onClick={() => navigate('/serverLogs')} sx={menuItemStyle}>
                    <Description sx={{ marginRight: '8px', color: "#EAEAEA" }} />
                    Server Logs
                </MenuItem>
            </Menu>
        </Fragment>
    );
};

export default ExtraMenu;
