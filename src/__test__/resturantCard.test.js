import { render, screen } from "@testing-library/react"
import Card,{withPromoted} from "../component/Card"
import data from "../mocks/resdatata.json"
import "@testing-library/jest-dom"



it("should render the resturant card",()=>{
  render(<Card  resdata={data}/>
  )
  const name = screen.getByText("Mahalaxmi Sweets & Restaurant")

  expect(name).toBeInTheDocument()
})

it("should render the with label of promoted in resturant card",()=>{

  const CardWithPromoted = withPromoted(Card)
  render(<CardWithPromoted  resdata={data}/>
  )
  const label = screen.getByText("Open")

  expect(label).toBeInTheDocument()
})