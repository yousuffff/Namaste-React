import Card from "./Card";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRest, setlistOfRest] = useState([]);
  const [filteredResturent , setfilteredResturent ] = useState([])


  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    console.log(`useEffect hook worked`);
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
  // console.log(listOfRest[1].info.cuisines);

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

              setlistOfRest(filteredList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredResturent.map((restaurant) => (
          <Card key={restaurant.info.id} resdata={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
