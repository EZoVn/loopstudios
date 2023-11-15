const beforeMain = document.querySelector(".beforeMain");
const btnSeeAll = document.getElementById("btnSeeAll");
const footer = document.querySelector(".footer");


window.addEventListener("load", () => {
  if (window.innerWidth <= 680) {
    beforeMain.removeChild(btnSeeAll);
    footer.insertBefore(btnSeeAll, footer)
    // Code à exécuter lorsque la fenêtre est de 680 pixels ou moins
  } else {
    console.log('Il y a une erreur')
    // Code à exécuter lorsque la fenêtre est plus large que 680 pixels
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 680) {
      beforeMain.removeChild(btnSeeAll);
      footer.insertBefore(btnSeeAll)
      // Code à exécuter lorsque la fenêtre est de 680 pixels ou moins
    } else {
      console.log('Il y a une erreur')
      // Code à exécuter lorsque la fenêtre est plus large que 680 pixels
    }
  });
});