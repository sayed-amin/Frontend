import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import {
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider,
} from '@mui/material';
import { Login, Logout, PersonAdd, LockOpen } from '@mui/icons-material';
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { logout } from "../../../store/Auth/auth-actions";

const AccountMenu = ({ setExpand }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const loginState = useSelector(state => state.auth);
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
                Account
                <span className="dropdown-caret"></span>
            </Nav.Link>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
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
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
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
                {loginState.loggedIn && (
                    <MenuItem onClick={() => navigate('/account')} sx={menuItemStyle}>
                        <Avatar sx={{ bgcolor: "#333333" }} /> {loginState.username}
                    </MenuItem>
                )}
                {loginState.loggedIn && (
                    <MenuItem onClick={() => navigate('/dashboard')} sx={menuItemStyle}>
                        <FontAwesomeIcon
                            icon={faUserSecret}
                            style={{
                                backgroundColor: 'rgba(0,0,0,0.1)',
                                borderRadius: '50%',
                                width: '20px',
                                height: '20px',
                                padding: '6px',
                                marginLeft: '-4px',
                                marginRight: '8px',
                            }}
                        />
                        Dashboard
                    </MenuItem>
                )}
                {loginState.loggedIn && <Divider sx={{ bgcolor: "#333333" }} />}
                {!loginState.loggedIn && (
                    <MenuItem onClick={() => navigate('/register')} sx={menuItemStyle}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" sx={{ color: "#EAEAEA" }} />
                        </ListItemIcon>
                        Register
                    </MenuItem>
                )}
                {!loginState.loggedIn && (
                    <MenuItem onClick={() => navigate('/login')} sx={menuItemStyle}>
                        <ListItemIcon>
                            <Login fontSize="small" sx={{ color: "#EAEAEA" }} />
                        </ListItemIcon>
                        Login
                    </MenuItem>
                )}
                <MenuItem onClick={() => navigate('/changePassword')} sx={menuItemStyle}>
                    <ListItemIcon>
                        <LockOpen fontSize="small" sx={{ color: "#EAEAEA" }} />
                    </ListItemIcon>
                    Change Password
                </MenuItem>
                {loginState.loggedIn && (
                    <MenuItem onClick={() => dispatch(logout())} sx={menuItemStyle}>
                        <ListItemIcon>
                            <Logout fontSize="small" sx={{ color: "#EAEAEA" }} />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                )}
            </Menu>
        </Fragment>
    );
};

export default AccountMenu;
