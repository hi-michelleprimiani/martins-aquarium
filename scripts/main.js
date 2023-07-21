import { FishList } from "./fish/FishList.js";
import { tipList } from "./tips/tips.js";

const parentHTMLElement = document.querySelector(".fishInserted");

parentHTMLElement.innerHTML = FishList();

const parentHTMLElement2 = document.querySelector(".tipInserted");
parentHTMLElement2.innerHTML = tipList();
