const sonic = document.querySelector(".sonic");
const motobug = document.querySelector(".motobug");
document.addEventListener("keydown", () => {
  sonic.classList.add("jump");
  setTimeout(() => {
    sonic.classList.remove("jump");
  }, 500);
});

const loop = setInterval(() => {
  const motobugPosition = motobug.offsetLeft;
  console.log(motobugPosition);
  const sonicPosition = Number(
    window.getComputedStyle(sonic).bottom.replace("px", "")
  );
  if (motobugPosition <= 60 && motobugPosition > 0 && sonicPosition < 60) {
    motobug.style.animation = "none";
    motobug.style.left = `${motobugPosition}px`;

    sonic.src = "./img/sonic_death.png";
    sonic.style.width = "84px";
    sonic.style.animation = "sonic-death 0.9s linear";
    sonic.style.bottom = "-100px";
    sonic.style.bottom = clearInterval(loop);
  }
}, 10);
