import React from "react";
import styles from '../../styles/Sidebar.module.css'

interface Props {
  icon: any;
  text: string
  activeTab: string,
  setActiveTab: Function
}

export default function SidebarItem(props: Props) {
  return <div
    onClick={() => { props.setActiveTab(props.text) }}
    style={{ display: 'flex', height: '48px', cursor: "pointer", width: '100%', paddingLeft: '23px', transition: '0.25s', backgroundColor: props.activeTab == props.text ? "#442C2E" : '' }}
    className={styles.sidebarItem}>
    <div style={{ marginRight: '13px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>{props.icon}</div>
    <div style={props.activeTab == props.text ? { display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FEDBD0' } : { display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#442C2E' }}>{props.text}</div>
  </div>;
}
