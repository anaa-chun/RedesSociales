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

function inicial() {
    let circulo = document.querySelectorAll("ul li a");
  
    circulo.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.style.backgroundColor = "#000000"; // Azul pastel
      });
  
      link.addEventListener("mouseout", () => {
        link.style.backgroundColor = ""; // Restablece al color original
      });
    });
  
    // Disable horizontal scrolling
    let body = document.body;
    let html = document.documentElement;
    
    body.style.overflowX = 'hidden';
    html.style.overflowX = 'hidden';
  }
  
  window.addEventListener("load", () => {
    inicial();
  });