import "./Fiesta.css"

function Fiesta() {
    function changeBg(e){
        const colors =["purple", "pink", "white", "green", "cyan", "blue", "red", "brown", "black"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        const body = document.querySelector('body')
        body.style.backgroundColor = colors[randomIndex];
    }
    return ( 

        <div className="fiestaContainer">
            <input onChange={(e)=> changeBg(e)} type="text"/>
        </div>
     );
}

export default Fiesta;