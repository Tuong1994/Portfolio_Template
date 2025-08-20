export const skillProgress = () => {
  const programLanuages = document.querySelectorAll(".language-percent");
  programLanuages.forEach((programLanguage) => {
    const percent = programLanguage.dataset.progress ?? 100;
    const progressBarEl = programLanguage.lastElementChild;
    progressBarEl.style.backgroundImage = `conic-gradient(#0ea5e9 ${percent}%, #fff 0)`;
  });
};
