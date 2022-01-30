interface LegendProps {
    color: string,
    text: string,
}

export default function CustomLegend(props: LegendProps) {
    return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '15px', height: '15px', borderRadius: '5px', backgroundColor: `${props.color}`, marginRight: '10px' }} />
        <div>{props.text}</div>
    </div>)
}