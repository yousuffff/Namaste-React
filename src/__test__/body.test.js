import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../component/Body";
import "@testing-library/jest-dom";
import MOCK_DATA_NAME from "../mocks/mockDataList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  });
});

test("should render with search bar", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const input = screen.getByTestId("searchInput");
  expect(input).toBeInTheDocument();
});

test("should render with search bar", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardbeforeSearch = screen.getAllByTestId("resCard");

  const searchBtn = screen.getByTestId("search");
  // console.log(searchBtn)
  const input = screen.getByTestId("searchInput");
  fireEvent.change(input, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  // console.log(cardbeforeSearch.length);
  // console.log(input)
  const cardaftersearch = screen.getAllByTestId("resCard");
  // console.log(cardaftersearch.length);
  expect(cardbeforeSearch.length).toBe(20);
});

test("should render with search bar", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // const cardbeforeSearch = screen.getAllByTestId("resCard");

  const filterBtn = screen.getByRole("button", { name: "Top Rated Resturant" });

  fireEvent.click(filterBtn);

  const cardafterFilter = screen.getAllByTestId("resCard");
  // console.log(cardaftersearch.length);
  expect(cardafterFilter.length).toBe(16);
});
/*
we also have some more funtion like -
-beforeAll(()=>{
  })
-beforeEach (()=>{
  })
-afterAll(()=>{
  })
-afterEach(()=>{
  })
*/
