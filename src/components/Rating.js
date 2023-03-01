 import starRed from "../assets/starRed.png"
 import starGrey from "../assets/starGrey.png"

export default function Rating({rating}){
    let tabRating = [1,2,3,4,5] 
    
   
    return (
        <div className="rating">
            {
                tabRating.map((tabElt, index) => (
                    rating >= tabElt ? 
                        <span key={index} className="rating__img">
                            <img  src={starRed} alt="red star" />
                        </span> 
                    :(
                        <span key={index} className="rating__imgGrey">
                            <img  src={starGrey} alt="grey star" />
                        </span> 
                    )
                ))
            } 
        </div>
    )
    
}