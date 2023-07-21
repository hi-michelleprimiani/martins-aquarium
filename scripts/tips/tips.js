import { getTips } from "../fish/database.js";

export const tipList = () => {
  const tips = getTips();
  let htmlString = '<article class="TipList">';
  for (const tip of tips) {
    htmlString += `
            <div class="tankDetails_tips">${tip.tip}</div>
            <div class="tankDetails_care">${tip.tankCare}</div></>`;
  }
  htmlString += `</article>`;
  return htmlString;
};
