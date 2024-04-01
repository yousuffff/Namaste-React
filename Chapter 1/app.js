// const heading = React.createElement(
//   "h1",
//    {id:'heading'},  // attributes
//   "hello World using React");
// const subHeading = React.createElement('h2', {}, "First react program");

const parent = React.createElement(
  'div',
  { id: 'parent' },
  [React.createElement(
    'div',
    { id: 'child' },
    [React.createElement('h1', {}, 'this is H1 in child class'),
    React.createElement('h2', {}, 'this is h2 in child class')]
  ),
  React.createElement(
    'div',
    { id: 'child2' },
    [React.createElement('h1', {}, 'this is H1 in child class'),
    React.createElement('h2', {}, 'this is h2 in child class')]
  )]
);




const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
