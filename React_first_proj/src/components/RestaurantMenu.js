import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {


    const [resInfo , setResInfo] = useState(null);
    const {resId} = useParams();
    

    useEffect(() => {
        fetchMenu();
    } , []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }


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