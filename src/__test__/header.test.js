import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../component/Header"
import { Provider } from "react-redux"
import appStore from "../utils/aapStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


test("Should have login button inside the component",()=>{

  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
    
  )

  const loginButton = screen.getByText('Login')

  expect(loginButton).toBeInTheDocument()

})
test("Should have logout button inside the component",()=>{

  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
    
  )

  const loginButton = screen.getByText('Login')

  fireEvent.click(loginButton);

  const logoutButton = screen.getByText('Logout')

  expect(logoutButton).toBeInTheDocument()

})
test("Should have cart item inside the component",()=>{

  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
    
  )

  const cart = screen.getByText(/🛒/)

  expect(cart).toBeInTheDocument()

})
test("should have button in header component", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
    
  )

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument()
})

// if there are more than one button then we can also search with name
test("should have button in header component", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
    
  )

  const button = screen.getByRole('button',{name:'Login'});

  expect(button).toBeInTheDocument()
})