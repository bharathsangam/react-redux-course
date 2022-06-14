import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTextColor } from "./themeSlice";


const Theme = () => {
    const [color, setColor] = useState("White");
    const dispatch = useDispatch();
    return (
        <div>
            <input name="" id="" className="textbox" type="text" onChange={(e) => { setColor(e.target.value) }} />
            <button type="button" className="btn btn-primary" onClick={() => { dispatch(changeTextColor(color)) }}>Change text Color</button>
            <h1>{color}</h1>
        </div>
    );
}

export default Theme;
