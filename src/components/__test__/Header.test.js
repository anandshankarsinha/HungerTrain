// test cases in reacT
import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";

//check if logo is loaded
test("Logo should load on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  const logo = header.getAllByTestId("logo");
  console.log(logo);
  //   console.log(header);
});

//test for online
test("Online status should be green", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  const onlineStatus = header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("❤️");
  //   console.log(header);
});

//cart
test("cart should be 0 items", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 0");
  //   console.log(header);
});
