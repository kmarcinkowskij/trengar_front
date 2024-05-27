import React, {useState} from "react";
import "./toolReccomendation.css";
import PercentageBar from "../percentageBar/percentageBar.jsx";
export default function ToolReccomendation(props) {
    const [toolData, setData] = useState([]);

    const refreshItems = async () => {
        fetch("http://127.0.0.1:8080/getToolByTags/", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                "type": "code-editor",
                "tags": ["free"],
                "systemTypes": ["windows"]
            }), // body data type must match "Content-Type" header
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.error(err.message);
            });

    }

    let values = Object.values(toolData);
    let array = [];

    for(let i = 0; i < toolData.length; i++) {
        values = Object.values(toolData.at(i))
        array.push(values);
    }
    return (
        
        <>
            <button onClick={refreshItems} className={"refresh-button"}>Refresh</button>
            <section className={"tool-cards-container"}>
            {array.map((item, index)=> {
                return (
                    <>
                            <section className={"card-container"} key={index}>
                                <section className={"card-content"}>
                                    <div className={"card-header michroma-regular"}>
                                    <img src={item[9]} alt={`logo for ${item[0]}`} className={"tool-icon"}></img>
                                    <div className={"item-creator-name"}>
                                    <h3>{item[0]}</h3>
                                    <h4 className={"creator lexend-giga-regular"}>{item[1]}</h4>
                                    <h6 className={"creator lexend-giga-regular"}>{item[8]}</h6>
                                    </div>
                                    </div>
                                    
                                    <hr />
                                    <div className={"desc-wrapper"}>
                                            <p className={"lexend-giga-light tool-description"}>{item[3]}</p>
                                    </div>
                                    <hr />
                                        
                                    <div className={"card-bar-container michroma-regular"}>
                                        <div className={"bar-inside"}>
                                            <div className={"card-ease-bar"}>
                                                <PercentageBar percents={item[7]}/>
                                            </div>
                                        </div>
                                        <h4>price: ${item[5]}</h4>
                                    </div>
                                </section>
                            </section>
                    </>
                )
            })}
            </section>
        </>
    );
}