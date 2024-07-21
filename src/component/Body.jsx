import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainAPI } from "../utils/constant";

const Body = () => {
  const [listOfRest, setlistOfRest] = useState([]);
  const [filteredResturent , setfilteredResturent ] = useState([])


  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    // console.log(`useEffect hook worked`);
    fetchData();
  }, []);

  const fetchData = async () => { 
    const data = await fetch(MainAPI);
    const json = await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // )
    setlistOfRest(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredResturent(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log("re- rendering")
  
  //conditional rendering

  // if(listOfRest.length == 0){
  //   return <Shimmer />;
  // }
  // console.log(listOfRest);

  //  console.log('rendering')
  return listOfRest.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">  
      <div className="body-header">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            className="searchBar"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            type="submit"
            className="submitBtn"
            onClick={() => {
              const filteredRest = listOfRest.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setfilteredResturent(filteredRest)
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="btn">
          <button
            className="filter-btn"
            onClick={() => {
              // console.log(listOfRest[0].info.avgRating);
              //  listOfRest.filter((rest) => );
              const filteredList = listOfRest.filter(
                (rest) => rest.info.avgRating > 4.3
              );
              // resList = resList.filter((rest) => rest.info.avgRating > 4.9);
              // console.log(resList[0].info.avgRating)
              // console.log(resList)

              setfilteredResturent(filteredList);
              console.log(filteredList)
            }}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredResturent.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/resturant/" + restaurant.info.id}><Card  resdata={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
