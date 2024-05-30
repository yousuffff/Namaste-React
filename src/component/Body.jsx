import Card from "./Card";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRest, setlistOfRest] = useState(resList);
  return (
    <div className="body">
      <div className="btn">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log(listOfRest[0].info.avgRating);
          //  listOfRest.filter((rest) => );
            const filteredList = listOfRest.filter((rest) => rest.info.avgRating > 4.2);
            // resList = resList.filter((rest) => rest.info.avgRating > 4.9);
            // console.log(resList[0].info.avgRating)
            // console.log(resList)
            
           setlistOfRest(filteredList)
          }
         

          }
        >
          Top Rated Resturant
        </button>
      </div>
      {/* <div className='search-container'>
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" className='searchBar' />
          <button type="submit" className='submitBtn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div> */}
      <div className="res-container">
        {listOfRest.map((restaurant) => (
          <Card key={restaurant.info.id} resdata={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
