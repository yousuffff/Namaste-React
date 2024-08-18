import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import ItemCard from "./ItemCard";
import { useState } from "react";


const ResturantCategory = ({data, showItem , setShowIndex}) => {

  
  // console.log(data);
  const { title , itemCards } = data;

  function handleToggle(){
    setShowIndex()
  }
  
  return (
    <div className="bg-gray-100  shadow-lg m-2 scroll- top-20 relative select-none">
      <div className="flex justify-between px-4 m-2 p-1 read-only cursor-pointer" onClick={handleToggle}>
        <h2 className="text-2xl font-bold ">{title} ({itemCards.length})</h2>
        <span className="flex justify-center hover:rotate-180 hover:transition-all ">🔽</span>
      </div>
      <div>
       
          
         {showItem && <ItemCard items={itemCards}/> } 
      </div>
    </div>
);
};
export default ResturantCategory;
