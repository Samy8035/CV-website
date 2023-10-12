var foto = document.getElementById("imagen");

foto.addEventListener("mouseover", function() {
  foto.style.transform = "rotate(360deg)";
  foto.style.transition = "1s";
});

foto.addEventListener("mouseout", function() {
  foto.style.transform = "rotate(0deg)";
  foto.style.transition = "1s";
});
