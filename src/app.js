//import
import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
// import Test from "./components/Test";
// import RestaurantMenu from "./components/RestaurantMenu";
// import Instamart from "./components/Instamart";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//lazy loading

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

// const burgerKing = {
//   name: "Burger King",
//   image:
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//   cuisines: ["Burger", "American"],
//   rating: "4.2",
// };

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Anand Sinha",
    email: "support@anand.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        {/*{Outlet}*/}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

//routing
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
