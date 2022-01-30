import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import styles from '../../styles/Sidebar.module.css'

//icon imports
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountDetails from "./AccountDetails";
import zIndex from "@mui/material/styles/zIndex";


interface Props {
  activeTab: string,
  setActiveTab: Function
}


export default function Sidebar(props: Props) {

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: "15vw",
          height: "100vh",
          marginLeft: "-2px",
          minWidth: '218px',
          overflow: 'hidden',
          position: 'fixed',
        },
      }}
    >
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "secondary.main",
          alignItems: "center",
          position: 'relative',
          zIndex: 9999,
        }}
      >
        <div className="sidebar-contents" style={{ marginLeft: "2px", display: 'flex', flexDirection: 'column', height: '100%', width: "100%" }}>
          <div
            style={{
              width: "111px",
              height: "42px",
              position: "relative",
              marginTop: "50px",
              marginBottom: "38px",
              marginLeft: '53px',
            }}
          >
            <Image
              src={"/logo.svg"}
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="sidebar-items" style={{ width: '100%' }}>
            <SidebarItem icon={<DashboardIcon color={props.activeTab == 'Dashboard' ? 'secondary' : 'primary'} className="sidebar-item-icon" />} text="Dashboard" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            <SidebarItem icon={<AnalyticsIcon color={props.activeTab == 'Analytics' ? 'secondary' : 'primary'} className="sidebar-item-icon" />} text="Analytics" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            <SidebarItem icon={<ReceiptIcon color={props.activeTab == 'Invoice' ? 'secondary' : 'primary'} className="sidebar-item-icon" />} text="Invoice" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            <SidebarItem icon={<ScheduleIcon color={props.activeTab == 'Schedule' ? 'secondary' : 'primary'} className="sidebar-item-icon" />} text="Schedule" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            <SidebarItem icon={<CalendarTodayIcon color={props.activeTab == 'Calendar' ? 'secondary' : 'primary'} className="sidebar-item-icon" />} text="Calendar" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            <SidebarItem icon={<MessageIcon color={props.activeTab == 'Messages' ? 'secondary' : 'primary'} className="sidebar-item-icon" />} text="Messages" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            <SidebarItem icon={<NotificationsIcon color={props.activeTab == 'Notifications' ? 'secondary' : 'primary'} className="sidebar-item-icon" />} text="Notifications" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            <SidebarItem icon={<SettingsIcon color={props.activeTab == 'Settings' ? 'secondary' : 'primary'} className="sidebar-item-icon" />} text="Settings" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
          </div>
          <AccountDetails />
        </div>
      </Paper>
    </Box>
  );
}
