 import star from "../assets/star.png"

export default function Rating({rating}){
    let tabRating = [] 
    for( let i = 1; i <= rating; i++){
        tabRating.push(i)
    }
   
    return (
          <div className="rating">
            {
                tabRating.map((tabElt) => (
                    tabElt > 0 ? 
                        <span className="rating__img">
                            <img key={tabElt.toString()} src={star} alt="" />
                        </span> 
                    : null
                ))
            } 
          </div>
    )
    
}