import React from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { display } from '@mui/system';

interface Props {
    icon: any,
    number: string,
    text: string,
    color: string
}

export default function Card(props: Props) {
    return <Box
        sx={{
            "& > :not(style)": {
                minWidth: "276px",
                width: '100%',
                height: "116px",
            },
        }}>
        <Paper
            elevation={24}
            sx={{
                display: "flex",
                backgroundColor: "secondary.main",
                alignItems: "center",
            }}>
            <div
                style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: props.color,
                    borderRadius: '50%',
                    margin: "28px",
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                {props.icon}</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '22px', fontWeight: '500' }}>{props.number}</div>
                <div style={{ fontSize: '14px' }}>{props.text}</div>
            </div>
        </Paper>
    </Box>

}
