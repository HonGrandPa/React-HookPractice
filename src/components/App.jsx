import React  from "react";
import Btn from "./button/button";


function App() {

    
    const [count, setCount] = React.useState(0);

    function increase() {

        setCount(count + 1);
    }
    
    function decrease() {

        setCount(count - 1)
    }

    return (

        <div className="container">
            <h1>{count}</h1>
            <div className="btn-container">
                <Btn method={decrease} icon="-" />
                <Btn method={increase} icon="+" />
            </div>
        </div>
    )

}

export default App;
