import _ from "lodash";

import "./style.css";
import Icon from "./icon.png";
// import Data from './data.xml';
// import Notes from "./data.csv";
// import toml from './data.toml';
import printMe from './print.js';

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.classList.add("hello");
  const myIcon = document.createElement('img');
  myIcon.src = Icon;
  element.append(myIcon);
  element.prepend(btn);

  return element;
}

document.body.prepend(component());
