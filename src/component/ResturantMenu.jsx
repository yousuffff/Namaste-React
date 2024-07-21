import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";


const ResturantMenu = () => {
  
  const {resId} = useParams();
  // console.log(par);

  const resInfo =  useResturantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  // console.log(resInfo?.cards[2]?.card?.card?.info);
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines}- {costForTwoMessage}
      </h2>
      <h2>Menu</h2>
      <ol>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li> */}
      </ol>
    </div>
  );
};
export default ResturantMenu;
