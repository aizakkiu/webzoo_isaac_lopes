const filterClass = document.querySelector("#filter-class");
const filterFood = document.querySelector("#filter-food");
const filterBiome = document.querySelector("#filter-biome");
const animalCards = [...document.querySelectorAll("[data-animal]")];
const emptyMessage = document.querySelector("#filter-empty");
function filterAnimals() {
  let visible = 0;
  animalCards.forEach(card => {
    const matches = (!filterClass.value || card.dataset.class === filterClass.value)
      && (!filterFood.value || card.dataset.food === filterFood.value)
      && (!filterBiome.value || card.dataset.biome.split("|").includes(filterBiome.value));
    card.hidden = !matches;
    if (matches) visible++;
  });
  emptyMessage.hidden = visible !== 0;
}
[filterClass, filterFood, filterBiome].filter(Boolean).forEach(select => select.addEventListener("change", filterAnimals));
