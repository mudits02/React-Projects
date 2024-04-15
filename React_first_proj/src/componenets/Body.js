// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

  export const Body = () => {


    return (
      <div className="body">

      <div className="search">Filter
        <button 
        className="filter-btn" onClick={() => {
          alert("Filter button activated");
        }}>
          Top Rated
        </button>
      </div>


      <div className="res-container">
          {restaurantList.map((restaurant) => {
            return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
          })}
        </div>
      </div>
    );
  };

  export default Body;