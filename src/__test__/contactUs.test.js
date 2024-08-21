import { render, screen } from "@testing-library/react";
import Contact from "../component/Contact";
import "@testing-library/jest-dom"

test("Should have render contact us component on computer",()=>{

  render(<Contact/>)
  const heading = screen.getAllByRole('heading')

  // assertion
  // console.log(heading.length)
  expect(heading.length).toBe(3)
})
test("Should have form element that have fullname as a placeholder",()=>{

  render(<Contact/>)
  const text = screen.getByPlaceholderText('Fullname')

  // assertion
  expect(text).toBeInTheDocument()
})