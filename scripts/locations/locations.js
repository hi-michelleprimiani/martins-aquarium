import { getLocations } from "../fish/database.js";

export const locationList = () => {
  let locations = getLocations();
  let htmlString = '<article class"LocationList">';
  for (const location of locations) {
    htmlString += `<section class ="LocationDetails">
    <div class="Locations">${location.name}</div>
    </section>`;
  }
  htmlString += `</article>`;
  return htmlString;
};
