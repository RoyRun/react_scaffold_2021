import './index.css';
import IMG from './404.png';

function component() {
    const element = document.createElement('div');
    const IMG404 = new Image();
    IMG404.src = IMG;
    element.appendChild(IMG404)
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = 'hello'
  
    return element;
  }
  
  document.body.appendChild(component());