 import star from "../assets/star.png"

export default function Rating({rating}){
    let tabRating = [] 
    for( let i = 1; i <= rating; i++){
        tabRating.push(i)
    }
   
    return (
          <div className="rating">
            {
                tabRating.map((tabElt, index) => (
                    tabElt > 0 ? 
                        <span key={index} className="rating__img">
                            <img  src={star} alt="" />
                        </span> 
                    : null
                ))
            } 
          </div>
    )
    
}