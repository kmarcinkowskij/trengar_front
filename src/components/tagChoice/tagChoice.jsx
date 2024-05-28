import React, {useContext, useEffect} from "react";
import { TagContext } from "../../App";
import "./tagChoice.css";

export default function() {
    const {setTags} = useContext(TagContext);
    

    const possibleTagsCode = ["free","versatile","extensible","open-source","collaborate","aesthetic", "comfortable","modern","fast","integrated"];
    const possibleTagsGraphic = ["free","versatile","extensible","open-source","collaborate","aesthetic", "comfortable","modern","fast","integrated"];
    let chosenArray = [];

    //TODO: TEMPORARY
    let choice = "code-editor";

    switch(choice) {
        case "code-editor": {
            chosenArray = possibleTagsCode;
            break;
        };
        case "raster-graphics-editor": {
            chosenArray = possibleTagsGraphic;
            break;
        }
        default: {
            chosenArray = ["none"];
        }

    }

    useEffect(()=> {
        setTags(["fast", "extensible"]);
    }, [])

    console.log(chosenArray);

    return (
        <>
        <section className="rel">
    
                <p>item</p>
                {}
        
        </section>
        </>
    )
}