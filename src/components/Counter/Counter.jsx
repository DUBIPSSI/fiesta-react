import { useState } from "react";
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0)
    function increment(){
        setCount(count + 1)
        console.log("+1");
    }
    function timer(e) {
        setCount(0)
        e.target.style.display = "none"
        setInterval(() => {
            e.target.style.display = "block"
        }, 5000);
    }
    
    return ( 
        <>
            <div className="counter">
                <div className="cps" onClick={()=> increment()}><button className="start" onClick={(e)=>timer(e)}>Démarrer</button></div>
                <p>Vous avez une moyenne de {count/5} cliques par secondes</p>
            </div>
        </>
     );
}

export default Counter;