import { CDN_URL } from "../utils/constants";

//We are destructuring the props in the below format
const RestaurantCard = (props) => {

    const {resData} = props;
    const{
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime
    } = resData?.info;
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200" >
        <img
          className="w-[200px] h-[200px] rounded-lg"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold py-4 text-lg">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <span>
          <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime}</h4>
        </span>
      </div>
    );
  };

  export const withpromotedLabel = (RestaurantCard) => {
    return (props) => {
      return(
        <div>
          <label className="absolute bg-black m-2 p-2 text-white rounded-lg">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
  };

  export default RestaurantCard;