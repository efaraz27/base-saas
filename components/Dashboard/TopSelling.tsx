import { Box, Paper } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function TopSelling() {
    return <Box sx={{ height: '452px' }}>
        <Paper elevation={24}
            sx={{
                backgroundColor: "secondary.main",
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
            <div style={{ marginLeft: '30px', marginTop: '30px', fontSize: '18px', fontWeight: '700' }}>Top Selling</div>
            <div style={{ width: '100%', padding: '30px', display: 'flex', flexDirection:'column', gap: '22px', margin: 'auto' }}>
                <div style={{ display: 'flex', position: 'relative' }}>
                    <Image src='/images/products/shoe.png' alt='shoe' width={96} height={96} />
                    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', paddingLeft: '20px' }}>
                        <div style={{ fontSize: '15px' }}>NIKE Shoes Black Pattern</div>
                        <Image src='/images/stars.png' alt='stars' width={83} height={14} layout='fixed' />
                        <div style={{ fontWeight: 700, fontSize: '15px' }}>$ 87</div>
                    </div>
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(68,44,46, 0.2)' }} />
                <div style={{ display: 'flex', position: 'relative' }}>
                    <Image src='/images/products/phone.png' alt='phone' width={96} height={96} />
                    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', paddingLeft: '20px' }}>
                        <div style={{ fontSize: '15px' }}>iPhone 12</div>
                        <Image src='/images/stars.png' alt='stars' width={83} height={14} layout='fixed' />
                        <div style={{ fontWeight: 700, fontSize: '15px' }}>$ 987</div>
                    </div>
                </div>
            </div>
        </Paper>
    </Box>;
}
