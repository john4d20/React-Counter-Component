import { useEffect, useState } from "react";
import Counter from "./Counter";

function CounterGroup(props){

    const [counterList,seCounterList] = useState([]);

    useEffect(()=> {
        console.log('props.size',props.size)
        const counterList = new Array(props.size).fill(Date.now());
        seCounterList(counterList);
    },[props.size]
    );

    function increase(){
        props.increase();
    }

    function decrease(){
        props.decrease();
    }

    return(
        <div>
            <span>
                {
                    counterList.map((item,index)=>(
                        <Counter key={item+index} increase={increase} decrease={decrease}></Counter>
                    ))
                }
            </span>
        </div>
    )
}
export default CounterGroup;