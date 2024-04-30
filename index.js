import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div',{id: 'parent'},[
  React.createElement('div', {id : 'child1'},[ 
    React.createElement('h1', {},'hellow world'),
    React.createElement('h2', {},'hellow world')
    ]),
  React.createElement('div', {id : 'child2'},[ 
    React.createElement('h1', {},'hellow world'),
    React.createElement('h2', {},'hellow world')
    ])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)