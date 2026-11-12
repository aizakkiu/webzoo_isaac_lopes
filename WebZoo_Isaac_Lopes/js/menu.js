const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
if (menuButton && navigation) {
  const closeMenu = () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    menuButton.textContent = "☰";
  };
  const openMenu = () => {
    navigation.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Fechar menu");
    menuButton.textContent = "×";
  };
  menuButton.addEventListener("click", () => {
    menuButton.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") { closeMenu(); menuButton.focus(); }
  });
  navigation.addEventListener("click", event => {
    if (event.target.closest("a") && window.matchMedia("(max-width: 767px)").matches) closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 768px)").matches) closeMenu();
  });
}
