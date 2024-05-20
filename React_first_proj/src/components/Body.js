// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react"; // Named import
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

  export const Body = () => {

    const [listOfRestaurants , setListOFRestaurants] = useState([]);
    const [filteredResList , setfilteredResList] = useState([]);
    const [searchText , setSearchText] = useState("");

    
    useEffect(() => {
      fetchData();
    } , []);
    const fetchData = async () => {
      const data = await fetch(API_URL);

      const json = await data.json();

      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //console.log(restaurants);
    // Setting the list of restaurants in state
    setListOFRestaurants(restaurants);
    setfilteredResList(restaurants);

    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
    {
      return(
        <h1>Looks like you are Offline , Check your Internet</h1>
      )
    }



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

      <div className="flex items-center space-x-2">
        <div className="m-4 p-4">
          <input type="text" className="border border-black p-2 rounded-lg" value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value); 
          }} />

          <button className="p-4 bg-green-100 m-4" 
          onClick={() => {
            const filteredRes = listOfRestaurants.filter( (res) => {
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            }
              
            );

            setfilteredResList(filteredRes);
          }}>Search</button>
        </div>
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded h-10 w-32 py-2 px-4 my-4 mx-4" onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => 
            res.info.avgRating > 4
            //console.log(res);
          );
 
          setfilteredResList(filteredList);
          
        }}>
          Top Rated
        </button>
      </div>
      


      <div className="flex flex-wrap">
      {filteredResList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        </div>
      </div>
    );
  };

  export default Body;