import React, {createContext, useContext, useState} from 'react';
import './App.css';
import Header from "./components/header/header.jsx";
import LeftTop from "./components/leftTop/leftTop.jsx";
import RightTop from "./components/rightTop/rightTop.jsx";
import ToolReccomendation from "./components/toolReccomendation/toolReccomendation.jsx";
import TagChoice from './components/tagChoice/tagChoice.jsx';

export const TagContext = createContext();

const TagContextProvider = ({ children }) => {
    const [tags, setTags] = useState([]);

    return <TagContext.Provider value= {{ tags, setTags }}>
        {children}
    </TagContext.Provider>
}
function App() {
    
    return (
        <div className="App">
            <Header/>
            <section className={"middle"}>
                <LeftTop/>
                <RightTop/>
            </section>
            <section className={"second"} id={"second"}>
                <TagContextProvider>
                    <TagChoice></TagChoice>
                    <ToolReccomendation/>
                </TagContextProvider>
            </section>
            <p></p>
        </div>
    );
}

export default App;