export const backgroundAnimation = () => {
  const container = document.querySelector(".squares");
  const count = 80; // số lượng hình vuông

  for (let i = 0; i < count; i++) {
    const sq = document.createElement("span");
    sq.classList.add("square");

    // random size
    const size = Math.random() * 40 + 10; // 10px - 50px
    sq.style.width = size + "px";
    sq.style.height = size + "px";

    // random vị trí ngang
    sq.style.left = Math.random() * 100 + "vw";

    // random thời gian animation
    const duration = Math.random() * 15 + 10; // 10s - 25s
    sq.style.animationDuration = duration + "s";

    // random delay
    sq.style.animationDelay = Math.random() * 20 + "s";

    // random bo góc (để có ô vuông và ô bo tròn)
    sq.style.borderRadius = Math.random() > 0.7 ? "6px" : "4px";

    container.appendChild(sq);
  }
};
