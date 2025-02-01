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
  
    // Prevent swipe left/right on touch devices
    document.addEventListener('touchmove', function(event) {
      if (event.scale !== 1) { event.preventDefault(); }
      let firstTouch = event.touches[0];
      let x = firstTouch.clientX;
      let scrollLeft = html.scrollLeft || body.scrollLeft;
      let scrollWidth = html.scrollWidth || body.scrollWidth;
      let clientWidth = html.clientWidth || body.clientWidth;
  
      // Check if the touch is near the screen edges
      if (x < 10 || x > clientWidth - 10) {
        event.preventDefault();
      }
    }, { passive: false });
  
    // Prevent mouse wheel horizontal scrolling
    window.addEventListener('wheel', function(event) {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
      }
    }, { passive: false });
  }
  
  window.addEventListener("load", () => {
    inicial();
  });