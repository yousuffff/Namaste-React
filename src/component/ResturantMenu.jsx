import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [showIndex , setShowIndex] = useState(0);

  // console.log(par);

  const resInfo = useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // console.log(resInfo?.cards[2]?.card?.card?.info);
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[7].card.card;
  console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  const categaries =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categaries);
  //
  return (
    <div className="mx-auto w-6/12" >
    <div className=" text-2xl text-red-400 font-bold font-serif p-2 sticky top-20 bg-white z-20">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(",   ")} - {costForTwoMessage}
      </h2>
      </div>
     <div className="flex flex-col gap-2">
        {categaries.map((category , Index) => (

          //controlled Component//
          <ResturantCategory 
          key={category.card.card.title}     
          data={category.card.card}
          showItem={Index === showIndex ? true : false}
          setShowIndex={()=> (setShowIndex(Index))}
          />
          )
       )
        }
        </div>
    </div>
  );
};
export default ResturantMenu;
