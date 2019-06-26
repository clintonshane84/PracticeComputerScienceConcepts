import "./styles.css";
import * as arrayHelper from "./arrayHelper.js";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var inp1 = [1, { a: [2, 1, 4] }, 3, [4, [5]], [6], [7, [8, [9]]]];
console.log(Object.prototype.toString.call(inp1));
console.log(arrayHelper.flattenArray(inp1));
