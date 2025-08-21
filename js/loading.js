export const initialLoad = () => {
  const loadingEl = document.querySelector(".loading-overlay");

  window.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    setTimeout(() => {
      if (loadingEl) loadingEl.remove();
    }, 3000);
    if (app) app.style.display = "block";
  });
};
