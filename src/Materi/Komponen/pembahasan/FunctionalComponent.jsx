import { useState } from "react";

const FunctionalComponent = ({code}) => {
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1);
    }

    const handleMinus = () => {
        if(value > 0)
        setValue(value - 1);
    }

    return (
        <div>
            <button onClick={handleMinus}>-</button>
            <span>{' '}{value}{' '}</span>
            <button onClick={handlePlus}>+</button>
            <h1>I deployed my first app with Vercel! 🤘🚀🚀</h1>
            <h2>Using {code}</h2>
        </div>
    )
}
export default FunctionalComponent;