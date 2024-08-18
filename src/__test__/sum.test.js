import { sum } from "../component/sum";

test('testing sum of two number ', () => { 
  const result = sum(25, 3)

  //Assertion
  expect(result).toBe(28)
 })