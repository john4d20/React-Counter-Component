import { useState } from "react";
import {useDispatch} from "react-redux";
import {RESET_SUM, UPDATE_SIZE} from "../constants/constants"


function CounterSizeGenerator(props){

    const [size,setSize] = useState(0);
    const dispatch = useDispatch();

    function handleChangeSize(event){
        var sizeValue = parseInt(event.target.value)
        setSize(sizeValue);
        dispatch({type: UPDATE_SIZE, payload: sizeValue});
        dispatch({type: RESET_SUM});
    }

    return(
        <div>
            <span>Size:</span>
            <input value={size} type = "number" onChange = {handleChangeSize}></input>
        </div>
    )
}
export default CounterSizeGenerator;