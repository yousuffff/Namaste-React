import Card from "./Card";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className='body'>
      <div className='search-container'>
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" className='searchBar' />
          <button type="submit" className='submitBtn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
      <div className='res-container'>
        {resList.map(restaurant => (
          <Card key={restaurant.info.id} resdata={restaurant.info} />
        ))}

      </div>
    </div>
  )
}

export default Body;