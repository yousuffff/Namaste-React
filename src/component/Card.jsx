import { CARDPIC_CDN } from "../utils/constant";

const Card = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
    sla } = props?.resdata;
    // console.log(props.resdata)
  return (
    <div className="w-72 bg-gray-200 border-solid border-black border-2 rounded-xl hover:cursor-pointer hover:bg-gray-300 transition-transform:ease-in 100ms top=" data-testid = "resCard" >
      <div className='  '>
        <img src={CARDPIC_CDN + cloudinaryImageId} alt="" className= "w-auto object-cover p-1 rounded-xl" />
      </div>
      <div className='mx-5 p-1  '>
        <h3 className="font-bold text-2xl text-ellipsis text-nowrap overflow-hidden">{name}</h3>
        <h4 className="text-ellipsis text-nowrap overflow-hidden">{cuisines.join(', ')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  )
}
export const withPromoted = (Card)=>{
  return (props)=>{
    return (
      <div>
      <label className="absolute m-2 p-2 px-4 bg-green-500 text-white rounded-lg" >Open</label>
       <Card  {...props}/>
       </div>
    )
  }
}
export default Card;