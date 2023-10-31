import { IMG_CDN_URL } from "./config";
const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <div className="card w-72 h-[30rem]  p-5 m-2 overflow:auto scrollbar-hide shadow-lg bg-yellow-500">
      {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ props.restaurant.data?.cloudinaryImageId}/> */}
      <img className="h-48" alt={name} src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl text-yellow-900 mb-5">{name} </h2>
      <h3>{description} </h3>
      <h4 className="font-bold text-xl text-yellow-800">Rupees: {price / 100}</h4>
    </div>
  );
};
export default FoodItem;
