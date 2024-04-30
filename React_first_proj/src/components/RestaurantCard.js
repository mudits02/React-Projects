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
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <span>
          <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime}</h4>
        </span>
      </div>
    );
  };

  export default RestaurantCard;