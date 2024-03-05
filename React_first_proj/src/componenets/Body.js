    // Body Component for body section: It contain all restaurant cards
  // We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
  import RestaurantCard from "./RestaurantCard";
  import restaurantList from "../utils/mockData";
  
  const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    );
  };

  export default Body;