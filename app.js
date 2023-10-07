const blurredImgs = document.querySelectorAll(".blur");

window.addEventListener("scroll", checkImgs);

checkImgs();

function checkImgs() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  for (const img of blurredImgs) {
    const imgTop = img.getBoundingClientRect().top;

    if (imgTop <= triggerBottom) {
      img.classList.add("show");
    }
  }
}
