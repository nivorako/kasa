 import star from "../assets/star.png"

export default function Rating({rating}){
    let tabRating = [] 
    for( let i = 1; i <= rating; i++){
        tabRating.push(i)
    }
   
    return (
          <div>
            {
                tabRating.map((tabElt) => (
                    tabElt > 0 ? <img key={tabElt.toString()} src={star} alt=""></img> : null
                ))
            } 
          </div>
    )
    
}