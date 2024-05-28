import { CARDPIC_CDN } from "../utils/constant";

const Card = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
    sla } = props?.resdata;
  return (
    <div className='card'>
      <div className='res-logo-container'>
        <img src={CARDPIC_CDN + cloudinaryImageId} alt="" className='res-logo' />
      </div>
      <div className='res-info'>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  )
}
export default Card;