import React from "react";
import './leftTop.css';

export default function LeftTop() {
    return (
        <>
            <aside className={"leftPart"}>
                <h1 className={"oi-regular catch"}>Don’t know what tool to use?</h1>
                <div className={"catch-part"}>
                <svg className={"svg_part"}width="898" height="28" viewBox="0 0 898 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="896" y2="1" stroke="black" stroke-width="2"/>
                    <line x1="1" y1="2" x2="0.999999" y2="28" stroke="black" stroke-width="2"/>
                    <line x1="897" y1="5.83469e-08" x2="897" y2="26" stroke="black" stroke-width="2"/>
                </svg>
                    <section className={"desc-wrapper"}>
                        <section className={"desc libre-caslon-display-regular"}>
                            <h2>Trengar can help you</h2>
                            <p className={"michroma-regular"}>Trengar (tren-guh) is a free tool that helps you with all
                                your creative tasks, and projects</p>
                            <button className={"lexend-giga-regular explore-button"}>
                                explore
                            </button>
                        </section>
                        <svg className={"star"} width="268" height="268" viewBox="0 0 268 268" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M268 134C150.565 143.158 143.158 150.565 134 268C124.842 150.565 117.435 143.158 0 134C117.435 124.842 124.842 117.435 134 0C143.158 117.435 150.565 124.842 268 134Z"
                                fill="#1D1D1D"/>
                        </svg>

                    </section>

                    <svg width="988" height="71" viewBox="0 0 988 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="168" y1="35.9999" x2="2" y2="35.9999" stroke="black" stroke-width="2"/>
                        <line x1="988" y1="35.9999" x2="273" y2="35.9998" stroke="black" stroke-width="2"/>
                    <line x1="987" y1="34.9999" x2="987" y2="8.99994" stroke="black" stroke-width="2"/>
                    <line x1="1" y1="37" x2="1" y2="11" stroke="black" stroke-width="2"/>
                    <rect x="186" width="70.1574" height="70.1574" rx="13" fill="black"/>
                    <path className={"star2"}
                        d="M242.822 34.8346C223.553 36.3372 222.337 37.5527 220.835 56.8221C219.332 37.5527 218.116 36.3372 198.847 34.8346C218.116 33.332 219.332 32.1164 220.835 12.847C222.337 32.1164 223.553 33.332 242.822 34.8346Z"
                        fill="#FBFAEE"/>
                    <path className={"star1"}
                        d="M236.471 19.3401C223.893 34.0449 223.893 35.7659 236.471 50.4707C221.766 37.8933 220.045 37.8933 205.34 50.4707C217.917 35.7659 217.917 34.0449 205.34 19.3401C220.045 31.9175 221.766 31.9175 236.471 19.3401Z"
                        fill="#FBFAEE"/>
                </svg>
                </div>

            </aside>
        </>
    )
}
