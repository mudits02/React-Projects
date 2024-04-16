// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import {useState} from "react"; // Named import


  export const Body = () => {

    const [listOfRestaurants , setListOFRestaurants] = useState(restaurantList);

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