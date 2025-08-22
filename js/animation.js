// Background square particles animation
export const backgroundAnimation = () => {
  const container = document.querySelector(".squares");
  const count = 80; // amount of squares

  for (let i = 0; i < count; i++) {
    const sq = document.createElement("span");
    sq.classList.add("square");

    // random size
    const size = Math.random() * 40 + 10; // 10px - 50px
    sq.style.width = size + "px";
    sq.style.height = size + "px";

    // random horiztonal position
    sq.style.left = Math.random() * 100 + "vw";

    // random animation duration
    const duration = Math.random() * 15 + 10; // 10s - 25s
    sq.style.animationDuration = duration + "s";

    // random delay
    sq.style.animationDelay = Math.random() * 20 + "s";

    // random border radius of each square
    sq.style.borderRadius = Math.random() > 0.7 ? "6px" : "4px";

    container.appendChild(sq);
  }
};
