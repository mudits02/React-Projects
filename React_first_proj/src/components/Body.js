// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import {useState , useEffect} from "react"; // Named import

  export const Body = () => {

    const [listOfRestaurants , setListOFRestaurants] = useState(restaurantList);

    useEffect(() => {
      fetchData();
    } , []);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const restaurants = json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info;
      
    // Setting the list of restaurants in state
    setListOFRestaurants(restaurants);

    };

    // if(listOfRestaurants.length === 0)
    // {
    //   return <h1>Loading......</h1>
    // }

    return (
      <div className="body">

      <div className="search">Filter
        <button 
        className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => 
            res.data.avgRating > 4
            //console.log(res);
          );
 
          setListOFRestaurants(filteredList);
          
        }}>
          Top Rated
        </button>
      </div>


      <div className="res-container">
          {listOfRestaurants.map((restaurant) => {
            return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
          })}
        </div>
      </div>
    );
  };

  export default Body;