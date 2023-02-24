export default function Collapse({titre, texte}){
    return(
        <>
            <h3>{titre}</h3>
            <ul>
                {
                    typeof texte === "string" 
                        ?
                        <p>{texte}</p>
                        :
                        texte.map((elt, index) => (
                            <li key={index}>
                                <p>{elt}</p>
                            </li>
                        ))
                }
            </ul>
        </>
    )
}