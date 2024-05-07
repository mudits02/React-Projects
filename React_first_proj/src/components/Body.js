// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react"; // Named import
import Shimmer from "./Shimmer";

  export const Body = () => {

    const [listOfRestaurants , setListOFRestaurants] = useState([]);
    const [filteredResList , setfilteredResList] = useState([]);
    const [searchText , setSearchText] = useState("");
    useEffect(() => {
      fetchData();
    } , []);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      //console.log(restaurants);
    // Setting the list of restaurants in state
    setListOFRestaurants(restaurants);
    setfilteredResList(restaurants);

    };

    // This is called Condition rendering
    // if(listOfRestaurants.length === 0)
    // {
    //   return <Shimmer />
    // }

    // Basically means if condition is true , return <Shoimmer /> else return the thing after :
    return listOfRestaurants.length === 0 ? 
    
    (<Shimmer />)
    
    : (
      <div className="body">

      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value); 
          }} />

          <button className="search-btn" 
          onClick={() => {
            const filteredRes = listOfRestaurants.filter( (res) => {
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            }
              
            );

            setfilteredResList(filteredRes);
          }}>Search</button>
        </div>
        <button 
        className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => 
            res.info.avgRating > 4
            //console.log(res);
          );
 
          setfilteredResList(filteredList);
          
        }}>
          Top Rated
        </button>
      </div>
      


      <div className="res-container">
          {filteredResList.map((restaurant) => {
            return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
          })}
        </div>
      </div>
    );
  };

  export default Body;