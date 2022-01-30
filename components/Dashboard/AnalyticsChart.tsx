import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Paper } from '@mui/material';
import CustomLegend from './CustomLegend'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [],
    datasets: [
        {
            label: '# of Votes',
            data: [19, 15, 12],
            backgroundColor: [
                'rgba(91, 147, 255, 1)',
                'rgba(255, 214, 107, 1)',
                'rgba(255, 143, 107, 1)',
            ],
            borderColor: [
                'rgba(91, 147, 255, 1)',
                'rgba(255, 214, 107, 1)',
                'rgba(255, 143, 107, 1)',
            ],
            borderWidth: 1,
        },
    ],
};



export function AnalyticsChart() {
    return (<Box sx={{
        "& > :not(style)": {
            minWidth: "276px",
            width: '100%',
            overflow: 'hidden'
        },
    }}>
        <Paper elevation={24}
            sx={{
                backgroundColor: "secondary.main",
                alignItems: "center",
            }}>
            <div style={{ marginLeft: '30px', marginTop: '30px', fontSize: '18px', fontWeight: '700' }}>Analytics</div>
            <div style={{ padding: '30px' }}>
                <Doughnut data={data} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px' }}>
                <CustomLegend color='rgba(91, 147, 255, 1)' text='Sale' />
                <CustomLegend color='rgba(255, 214, 107, 1)' text='Distribute' />
                <CustomLegend color='rgba(91, 147, 255, 1)' text='Return' />
            </div>
        </Paper>
    </Box>)
}