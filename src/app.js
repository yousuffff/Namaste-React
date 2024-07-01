import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import Error from './component/Error';
import About from './component/About';
import Contact from './component/Contact';
import { createBrowserRouter , Outlet, Route, RouterProvider } from 'react-router-dom';
import Contact from './component/Contact';

// //React.creatElement => reactElement => js Oject => html 
// const parent = React.createElement('div', { id: 'parent' }, [
//   React.createElement('div', { id: 'child1' }, [
//     React.createElement('h1', {}, 'hellow world'),
//     React.createElement('h2', {}, 'hellow world')
//   ]),
//   React.createElement('div', { id: 'child2' }, [
//     React.createElement('h1', {}, 'hellow world'),
//     React.createElement('h2', {}, 'hellow world')
//   ])
// ]);

// //jsx => React.creatElement => reactElement => js Oject => html 
// //jsx transpiled into js with the help og babel
// const jsxHeading = <h1>helllo react with JSX</h1>

// // react components
// // there are two types of react components
// // 1) class based component (not use any more)
// // 2) functional component
// // functional component is basically javascript function which return some jsx;

// const Heading = () => <h1>helllo react with JSX</h1> // this is also valid syntax for functional components 
// // const HeadingComponent = () => {
// //   return <h2>I'm Functional Component</h2>
// // }

// // component composition
// const HeadingComponent = () => (
//   <div id='head'>
//    <Heading />
//     <h2>I'm Functional Component</h2>
//   </div>

// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(jsxHeading)
// root.render(<HeadingComponent />)


//Assignment 3//

//          //pure react 
// const header = React.createElement('div', { className: 'title' }, [
//   React.createElement('h1', {}, `I'm h1 heading`),
//   React.createElement('h2', {}, `I'm h2 heading`),
//   React.createElement('h3', {}, `I'm h3 heading`),

// ])

//          //using jsx

// // react element
// const header1 = <div>
//   <h1>I'm h1 heading</h1>
//   <h2>I'm h2 heading</h2>
//   <h3>I'm h3 heading</h3>
// </div>


// //react component(funtional)
// // and component composition
// const Heading2 =() => <h2>I'm h2 heading</h2>

// const Header1 =() => <div className = 'title'>
//   <h1 >I'm h1 heading</h1>

//   {/* {Heading2}  this will work with only react element */}
//   {<Heading2/>  /*this method is working with component*/}
//   {<Heading2></Heading2> /*this method is working with component*/}
//   <h3>I'm h3 heading</h3>
// </div>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(header1) // calling react element
// root.render(<Header1 />) // calling react component
/**
 * header
 * -logo
 * -navigation
 * -cart
 * body
 * -search bar
 * -card container
 * --cards
 * footer
 * - coopyright 
 * -info
 * -some other link
 * 
 */







const AppContainer = () => {
  return (
    <div className='main-container'>
      <Header />
      <Outlet />
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
path: '/',
element: <AppContainer />,
children: [
  {
    path: '/',
    element: <Body />
  },
  {
    path: '/about',
    element: <About />
  },
    {
      path: '/contact',
      element: <Contact />
      }

],
errorElement: <Error />
},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(header1) // calling react element
// root.render(<AppContainer />) // calling react component
root.render(<RouterProvider router={AppRouter}/>)