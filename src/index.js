import './index.css';
import IMG from './404.png';
import BabelPage from './babelPage.jsx';
import './index.less'
function getComponent() {
    // const element = document.createElement('div');
    // const IMG404 = new Image();
    // IMG404.src = IMG;
    // element.appendChild(IMG404)
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = 'hello'
  
    return import(/*webpackChunkName:'lodash'*/'lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello233', 'webpack'], ' ');;
      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
  }
  getComponent().then((component) => {
    document.body.appendChild(component);
  });