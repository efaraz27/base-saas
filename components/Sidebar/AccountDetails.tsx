import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default function AccountDetails() {
    return <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', marginBottom: '30px', marginLeft: '28px', width: '100%' }}>
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
        >
            <Avatar alt="Remy Sharp" src="/avatar/1.jpg" />
        </StyledBadge>
        <div style={{ marginLeft: "10px" }}>
            <div style={{ fontSize: "14px", fontWeight: 500 }}>Remy Sharp</div>
            <div style={{ fontSize: "12px", opacity: '70%' }}>Free Account</div>
        </div>
        <LogoutIcon style={{ marginLeft: "27px" }} />
    </div>;
}
