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
  } else {
    main.removeChild(divBtn);
    beforeMain.append(btnSeeAll);

    console.log('Il y a une erreur')
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 680) {
      beforeMain.removeChild(btnSeeAll);
      main.append(divBtn);
      div.append(btnSeeAll);
    } else {
      main.removeChild(divBtn);
      beforeMain.append(btnSeeAll);
      console.log('Il y a une erreur')
    }
  });
});