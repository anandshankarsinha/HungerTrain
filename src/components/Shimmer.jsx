import React from "react";

function Shimmer() {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-ui"></div>
        ))}
    </div>
  );
}

export default Shimmer;

/*import React from "react";
import "../style.css";
import { useState } from "react";

import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchInput)
  );
}

const Body = () => {
  // let searchTxt = "Domino's";
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState(); // to create  state variable
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            // searchTxt = e.target.value;
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchInput, restaurants);
            //update the state
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* <RestaurantCard restaurant = {restaurantList[0]}/>
        <RestaurantCard restaurant = {restaurantList[1]}/>
        <RestaurantCard restaurant = {restaurantList[2]}/>
        <RestaurantCard restaurant = {restaurantList[3]}/>
        <RestaurantCard restaurant = {restaurantList[4]}/>
        <RestaurantCard restaurant = {restaurantList[5]}/> */
/* <RestaurantCard {...restaurantList[0].data} />
        <RestaurantCard {...restaurantList[1].data} />
        <RestaurantCard {...restaurantList[2].data} />
        <RestaurantCard {...restaurantList[3].data} />
        <RestaurantCard {...restaurantList[4].data} />
        <RestaurantCard {...restaurantList[5].data} /> */
// {restaurants.map((restaurant) => {
//             return (
//               <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
//             );
//           })}
//         </div>
//       </>
//     );
//   };

//   export default Body;
//    */
