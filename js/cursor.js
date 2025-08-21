export const mouseCursor = () => {
  const cursorEl = document.querySelector(".cursor");
  const hoverTargets = document.querySelectorAll(
    "button, a, input, select, textarea, .hover-target"
  );
  const mousePos = { x: 0, y: 0 };
  let cursorSize = 30;

  window.addEventListener("mousemove", (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;

    const animate = () => {
      const { x, y } = mousePos;
      const offset = cursorSize / 2;
      cursorEl.style.transform = `translate3d(${x - offset}px, ${
        y - offset
      }px, 0)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursorSize = 60
        cursorEl.classList.add("cursor-hover");
      });
    });

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseleave", () => {
        cursorSize = 30
        cursorEl.classList.remove("cursor-hover");
      });
    });

    cursorEl.style.width = `${cursorSize}px`
    cursorEl.style.height = `${cursorSize}px`
  });
};
