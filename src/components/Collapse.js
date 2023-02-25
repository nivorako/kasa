import arrow from "../assets/arrow.png"

export default function Collapse({title, text, type}){
    function handleTextOnClick(){
        const btn = document.querySelector('.collapseText__btn')
        const list = document.querySelector(".collapseText__text")
        btn.classList.toggle("rotate")
        list.classList.toggle("hidden")
    }

    function handleListOnClick(){
       const btn = document.querySelector('.collapseList__btn')
       const list = document.querySelector(".collapseList__list")
       btn.classList.toggle("rotate")
       list.classList.toggle("hidden")
    }
   
    return type === "liste" ? (
            <article className="collapseList">
                <div className="collapseList__header" onClick={() => handleListOnClick()} >
                    <h3>{title} </h3>
                    <img src={arrow} alt="" className="collapseList__btn"/>
                </div>
                <ul className="collapseList__list">
                    { 
                        text.map((elt, index) =>(
                            <li key={index} >
                                <p>{elt} </p>
                            </li>
                        ))
                    }
                </ul>

            </article>
    ) : (
        <article className="collapseText">
            <div className="collapseText__header" onClick={() => handleTextOnClick()}>
                <h3>{title} </h3>
                <img src={arrow} alt="" className="collapseText__btn"/>
            </div>
            <div className="collapseText__text">
                <p>{text} </p>
            </div>
        </article>
    )
}