function inicial() {
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
