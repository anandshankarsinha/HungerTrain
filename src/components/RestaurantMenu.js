import React from "react";
// import { menu_CDN } from "./config";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  console.log(id);
  //   console.log(resId);
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5763463&lng=85.1589544&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data?.json();
    // console.log(resId);
    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find(
          (x) =>
            x &&
            x.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )?.card?.info || null;
    // console.log(
    //   json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
    setRestaurant(restaurantData);
    // console.log(restaurantData)

    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    console.log(menuItemsData);

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    setMenuItems(uniqueMenuItems);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu flex">
      <div className="restName px-5 bg-[#FFB000]">
        {/* <h1>Restraunt id: {id}</h1> */}
        <h2 className="text-[5rem]">{restaurant?.name}</h2>
        <img
          className="w-96 h-96"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        />
        <h3>{restaurant?.locality}</h3>
        <h3 className="font-bold">{restaurant?.city}</h3>
        <h3 className="font-bold text-yellow-700">
          {restaurant?.avgRating} stars
        </h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>
      <div className="menu-items-list p-5 w-[75rem] bg-[#F5F5DC] shadow-xl">
        <h1 className="text-3xl mb-5">Menu</h1>
        {menuItems.map((item) => (
          <div className="menu-item" key={item?.id}>
            <div className="menu-item-details">
              <li className="item-title mb-2 list-none">
                <div className="flex justify-between">
                  <h2>{item?.name}  </h2>
                  <button
                    className="p-1 px-5 rounded-md bg-yellow-400 text-red-700 font-bold"
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </div>
              </li>
            </div>
            {/* <div className="menu-img-wrapper">
              {item?.imageId && (
                <img
                  className="menu-item-img"
                  src={IMG_CDN_URL + item?.imageId}
                  alt={item?.name}
                />
              )}
              <button className="add-btn"> ADD +</button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
