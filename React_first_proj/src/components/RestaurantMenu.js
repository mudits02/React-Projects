import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />

    const {name , cuisines, costForTwoMessage , avgRating} = resInfo?.cards[2]?.card?.card?.info;
    const menuCard = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(menuCard);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>Known for : {cuisines.join(", ")}</h3>
            <h3>Cost for Two : {costForTwoMessage}</h3>
            <h3>Average Rating : {avgRating}</h3>
            <h2>Menu</h2>
            <ul>
            {menuCard.map(menu => <li key={menu.card.info.id}>{menu.card.info.name} - {"Rs."}{menu.card.info.price/100 || menu.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;