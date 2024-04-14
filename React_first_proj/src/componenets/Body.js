// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

  export const Body = () => {


    return (
      <div className="body">

        <div className="filter">
          <button className="top-rated-btn" onClick=
          {
            () =>

            {
              restaurantList = restaurantList.filter
              (
                (res) => res.data.avgRating > 4
              );

              console.log(restaurantList);
            }
          }
          >
            Top Rated restaurant
          </button>
        </div>

        <div className="res-container">
          {restaurantList.map((restaurant) => {
            return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
          })}
        </div>
      </div>
    );
  };

  export default Body;