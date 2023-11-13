document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      card.classList.add(
        "bg-blue-400",
        "transform",
        "scale-110",
        "transition",
        "duration-300"
      );
    });

    card.addEventListener("mouseout", function () {
      card.classList.remove("bg-blue-400", "transform", "scale-110");
    });
  });
});
