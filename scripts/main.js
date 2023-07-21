import { FishList } from "./fish/FishList.js";
import { tipList } from "./tips/tips.js";
import { locationList } from "./locations/locations.js";

debugger;

const parentHTMLElement = document.querySelector(".fishInserted");
parentHTMLElement.innerHTML = FishList();

const parentHTMLElement2 = document.querySelector(".tipInserted");
parentHTMLElement2.innerHTML = tipList();

const parentHTMLElement3 = document.querySelector(".locationsInserted");
parentHTMLElement3.innerHTML = locationList();
