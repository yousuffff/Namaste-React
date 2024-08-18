import { CARDPIC_CDN } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = (  {items}) => {
  console.log(items)

  const dispatch = useDispatch()
  const handleItem = (item)=>{
     dispatch(addItem(item))
  }

  // items.forEach((item) => console.log(item.card.info.name));
  return (
    <div className="m-2 text-center text-xl">
      {items.map((item) => (
      
        <div key={item.card.info.id} 
        
        className="text-left border-b-2 border-slate-500 m-2 flex justify-between px-4">
        <div className="flex flex-col justify-center max-w-2xl">
          <h3 className="m-2 font-bold font-gilroy">{item.card.info.name}</h3>
          <h3 className="m-2 font-bold">₹ {item.card.info.price ? item.card.info.price /100 : item.card.info.defaultPrice / 100 }</h3>
          <p className="m-2 text-sm text-ellipsis text-slate-700">{item.card.info.description}</p>
        </div>
        <div className="flex flex-col relative ">
        { item.card.info.imageId ? <img src={CARDPIC_CDN + (item.card.info.imageId)} className="mix-blend-multiply w-48 p-2"></img> : ""}
        <button className="absolute bottom-6 right-16 p-2 border bg-slate-50 px-6 rounded-lg border-gray-300 text-green-600 font-bold hover:cursor-pointer hover:bg-gray-300" onClick={()=>handleItem(item)}>ADD</button>
        </div>
        </div>
        
      ))}
    </div>);
  
};

export default ItemCard;
