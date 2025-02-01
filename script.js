function inicial() {
    let circulo = document.querySelectorAll("ul li a");
  
    circulo.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.style.backgroundColor = "#b3d9ff"; // Azul pastel
      });
  
      link.addEventListener("mouseout", () => {
        link.style.backgroundColor = ""; // Restablece al color original
      });
    });
  }
  
  window.addEventListener("load", () => {
    inicial();
  });
  