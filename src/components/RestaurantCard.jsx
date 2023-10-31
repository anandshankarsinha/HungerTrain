import { IMG_CDN_URL } from "./config";
import { useContext } from "react";
// import UserContext from "../utils/UserContext";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // const { user } = useContext(UserContext);
  return (
    // <div className="card">
    //   <img src={burgerKing.image} />
    //   <h2>{burgerKing.name} </h2>
    //   <h3>{burgerKing.cuisines.join(", ")} </h3>
    //   <h4>{burgerKing.rating} stars</h4>
    // </div>
    <div className="card w-64 h-[20rem] rounded-md p-2 m-2  shadow-lg bg-[#FFCF9D] overflow-auto scrollbar-hide">
      {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ props.restaurant.data?.cloudinaryImageId}/> */}
      <img className="h-48 w-48 m-auto rounded-md" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl text-[#26577C] pl-2 ">{name} </h2>
      <h3 className="pl-2">{cuisines.join(", ")} </h3>
      <h4>{lastMileTravelString}</h4>

      {/* <h5 className="font-bold">{user.name} - {user.email}</h5> */}
    </div>
  );
};
export default RestaurantCard;
