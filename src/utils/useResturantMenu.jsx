import { useState, useEffect } from "react";
import { MenuAPI } from "./constant";

const useResturantMenu = (resId)=>{
  const [ resInfo , setResInfo] = useState(null)
 
  useEffect(() => {
    // console.log("hello world!");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MenuAPI + resId);
    const json = await data.json();
    // console.log(json);
    // console.log(json.data);
    setResInfo(json.data);
  };
  
  return resInfo;
}
export default useResturantMenu;
/**
 * Custom Hook 
 */