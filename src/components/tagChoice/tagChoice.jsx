import React, {useContext, useEffect, useState} from "react";
import { TagContext } from "../../App";
import "./tagChoice.css";

export default function() {
    const {setTags} = useContext(TagContext);
    const {tags} = useContext(TagContext);
    let {choiceFromContext, setChoice} = useContext(TagContext);
    const possibleChoices = ["code editor", "raster graphics editor", "vector graphics editor", "IDE", "video editing"];
    const possibleTagsCode = ["free","versatile","extensible","open-source","collaborate","aesthetic", "comfortable","modern","fast","integrated"];
    const possibleTagsGraphic = ["free","versatile","extensible","open-source","collaborate","aesthetic", "comfortable","modern","fast","integrated"];
    let chosenArray = [];
    let tagsArray = [];

    //TODO: TEMPORARY
    let choice = "code-editor";

    switch(choice) {
        case "code-editor": {
            chosenArray = possibleTagsCode;
            break;
        }
        case "raster-graphics-editor": {
            chosenArray = possibleTagsGraphic;
            break;
        }
        default: {
            chosenArray = ["none"];
        }

    }
    const setTagContext = (tag) => {
        setTags((prevState) => [...prevState, tag]);
    }

    const deleteTagContext = (tag) => {
        setTags((prevState) => prevState.filter((i) => i !== tag));
    }
    const addToTags = (tag) => {
        if(tags.includes(tag.item)) {
            deleteTagContext(tag.item);
            return;
        }
        let theItem = tag.item;
        setTagContext(theItem);
    }

    const changeType = (type) => {
        console.log(type.item);
    }

    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    }

    return (
        <>
            <section className={"software-type-container"}>
                <section className={"types"}>
                    {possibleChoices.map((item) => {
                        return <button className={`tag michroma-regular`} onClick={()=>{changeType({item})}}>{item}</button>
                    })}
                </section>
            </section>
        <section className={"tags-container"}>
            <section className={"tags"}>
                {chosenArray.map((item, index) => {
                        return <button className={`tag michroma-regular`} onClick={(e) =>{ addToTags({item});e.target.classList.toggle('active')}}>{item}</button>
                    })
                }
            </section>
        
        </section>
        </>
    )
}