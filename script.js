document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");
  const navbar = document.getElementById("navbar");

  // Mostrar al pasar el mouse
  menuContainer.addEventListener("mouseenter", () => {
    navbar.classList.remove("hidden");
  });

  // Ocultar al salir del área
  menuContainer.addEventListener("mouseleave", () => {
    navbar.classList.add("hidden");
  });
});