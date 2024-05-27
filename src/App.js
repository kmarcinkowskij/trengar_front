import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/header/header.jsx";
import LeftTop from "./components/leftTop/leftTop.jsx";
import RightTop from "./components/rightTop/rightTop.jsx";

function App() {
  const [toolData, setData] = useState([]);

  useEffect(() => {

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
        "type": "raster_graphics_editor",
        "tags": ["industry-standard"],
        "systemTypes": ["macos", "linux"]
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

  }, []);


  let values = Object.values(toolData);
  let array = [];

  for(let i = 0; i < toolData.length; i++) {
      values = Object.values(toolData.at(i))
      array.push(values);
  }
  return (
      <div className="App">
          <Header/>
          <section className={"middle"}>
          <LeftTop/>
              <RightTop/>
          </section>
        <p></p>
        <ol>
            {array.map((item, index)=> {
                return (
                    <>
                        <h1>
                            {item[0]}
                        </h1>
                    </>
                )
            })}
        </ol>
      </div>
  );
}

export default App;
