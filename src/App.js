import React from 'react';
import './App.css';
import Header from "./components/header/header.jsx";
import LeftTop from "./components/leftTop/leftTop.jsx";
import RightTop from "./components/rightTop/rightTop.jsx";
import ToolReccomendation from "./components/toolReccomendation/toolReccomendation.jsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <section className={"middle"}>
                <LeftTop/>
                <RightTop/>
            </section>
            <section className={"second"} id={"second"}>
                <ToolReccomendation/>
            </section>
            <p></p>
        </div>
    );
}

export default App;