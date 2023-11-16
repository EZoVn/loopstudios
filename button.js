const beforeMain = document.querySelector(".beforeMain");
const btnSeeAll = document.getElementById("btnSeeAll");
const main = document.querySelector(".main");
const divBtn = document.createElement("div");

divBtn.className = "divBtn";

window.addEventListener("load", () => {
  if (window.innerWidth <= 680) {
    beforeMain.removeChild(btnSeeAll);
    main.append(divBtn);
    divBtn.append(btnSeeAll);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 680) {
      if (!divBtn.contains(btnSeeAll)) {
        beforeMain.removeChild(btnSeeAll);
        divBtn.append(btnSeeAll);
      }
    } else {
      if (!beforeMain.contains(btnSeeAll)) {
        divBtn.removeChild(btnSeeAll);
        beforeMain.append(btnSeeAll);
      }
    }
  });
});