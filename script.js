/* function inicial() {
  let circulo = document.querySelectorAll("ul li a");

  circulo.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.backgroundColor = "#000000";
    });

    link.addEventListener("mouseout", () => {
      link.style.backgroundColor = "";
    });
  });
}

window.addEventListener("load", () => {
  inicial();
});
 */

function lockOrientation() {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock("portrait-primary")
        .then(() => console.log("Orientation locked to portrait"))
        .catch(error => console.error("Orientation lock failed:", error));
    } else {
      console.log("Screen Orientation API not supported");
    }
  }
  
  window.addEventListener("load", () => {
    lockOrientation();
  });