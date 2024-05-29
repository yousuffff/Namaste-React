import Card from "./Card";
import resList from "../utils/mockData";

const Body = () => {
  let listOfRest = [
    {
      info: {
        id: "636723",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 3.9,
        sla: {
          deliveryTime: 32,
          slaString: "30-35 mins",
        },
      },
    },
    {
      info: {
        id: "636724",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.2,
        sla: {
          deliveryTime: 32,
          slaString: "30-35 mins",
        },
      },
    },
  ];
  return (
    <div className="body">
      <div className="btn">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log(resList.info.avgRating);
            listOfRest.filter((rest) => rest.avgRating < 4);
            console.log(listOfRest);
          }}
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
