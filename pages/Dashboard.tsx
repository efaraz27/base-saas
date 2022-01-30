import React from 'react';
import Card from '../components/Dashboard/Card';

//icon imports
import FavoriteIcon from '@mui/icons-material/Favorite';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ReportsCharts from '../components/Dashboard/ReportsCharts';
import { AnalyticsChart } from '../components/Dashboard/AnalyticsChart';
import RecentOrdersTable from '../components/Dashboard/RecentOrdersTable';
import TopSelling from '../components/Dashboard/TopSelling';

export default function Dashboard() {
  return <div style={{ backgroundColor: '#FEDBD0', width: '100%', padding: '30px', display: 'flex', marginLeft: '15vw' }}>
    <div style={{ margin: 'auto', maxWidth: '1196px', display: 'flex', flexDirection: 'column', gap: "30px" }}>
      <div style={{ display: 'flex', gap: " 30px", flexWrap: 'wrap' }}>
        <div style={{ width: '276px' }}><Card icon={<FavoriteIcon style={{ color: '#E74C3C' }} />} number='178+' text='Save Products' color="rgba(231, 76, 60, 0.2)" /></div>
        <div style={{ width: '276px' }}><Card icon={<SportsEsportsIcon style={{ color: 'rgba(255, 195, 39, 1)' }} />} number='20+' text='Stock Products' color="rgba(255, 195, 39, 0.2)" /></div>
        <div style={{ width: '276px' }}><Card icon={<ShoppingBagIcon style={{ color: 'rgba(91, 147, 255, 1)' }} />} number='190+' text='Sales Products' color="rgba(91, 147, 255, 0.2)" /></div>
        <div style={{ width: '276px' }}><Card icon={<BusinessCenterIcon style={{ color: 'rgba(96, 91, 255, 1)' }} />} number='12+' text='Job Applications' color="rgba(96, 91, 255, 0.2)" /></div>
      </div>
      <div style={{ display: 'flex', gap: " 30px"}}>
        <div style={{ height: '100%', width: '70%' }}><ReportsCharts /></div>
        <div style={{ height: '100%', width: '30%' }}><AnalyticsChart /></div>
      </div>
      <div style={{ display: 'flex', gap: " 30px" }}>
        <div style={{ height: '100%', width: '70%' }}><RecentOrdersTable /></div>
        <div style={{ height: '100%', width: '30%' }}><TopSelling /></div>
      </div>
    </div>
  </div >;
}
