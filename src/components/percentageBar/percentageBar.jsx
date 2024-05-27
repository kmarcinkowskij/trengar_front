import React from "react";
import "./percentageBar.css"

export default function PercentageBar(props) {
    const red = 0, green = 120;;
    let width = `${props.percents}%`;
    let percent = props.percents/100;
    let hue = (green - red) * percent;
    let hueFinal = hue + red;
    let bg = `hsl(${hueFinal}, 100%, 50%)`;
    return (
        <div className={"bar-container"}>
            <div className={"bar lexend-giga-light"} style={{width:`${width}`,background: `${bg}`}}>Ease of use</div>
        </div>
    )
}