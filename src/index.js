import './index.css';
import './index.less'

import FooterHtml from './test.html';
import React from 'react';
import Root from './Home/index.jsx';
import ReactDom from 'react-dom'
// setTimeout(() => {
//   document.write(FooterHtml);

// },0)
ReactDom.render(<Root/>,document.getElementById('root'));

// function getComponent() {
//     // const element = document.createElement('div');
//     // const IMG404 = new Image();
//     // IMG404.src = IMG;
//     // element.appendChild(IMG404)
//     // Lodash, currently included via a script, is required for this line to work
//     // element.innerHTML = 'hello'
  
//     return import(/*webpackChunkName:'lodash'*/'lodash')
//     .then(({ default: _ }) => {
//       const element = document.createElement('div');

//       element.innerHTML = _.join(['Hello233', 'webpack'], ' ');;
//       return element;
//     })
//     .catch((error) => 'An error occurred while loading the component');
//   }
//   getComponent().then((component) => {
//     document.body.appendChild(component);
//   });