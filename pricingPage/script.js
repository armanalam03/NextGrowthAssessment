const planCards = document.querySelectorAll(".plan-card");
const planBtn = document.querySelectorAll(".plan-btn");
const hiddenForm = document.querySelector(".hidden-form");
const body = document.querySelector("body");
const closeBtn = document.querySelector(".close-btn");
const slider = document.querySelector("#mySlider");
// const sliderValue = document.getElementById("sliderValue");

planCards[0].classList.add("highlight");

planBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    hiddenForm.style.display = "block";
    body.style.overflow = "hidden";
  })
})

closeBtn.addEventListener("click", () => {
  hiddenForm.style.display = "none";
  body.style.overflow = "auto";
})

slider.addEventListener("input", (e) => {
  const sliderValueText = e.target.value;
  planCards.forEach((planCard) => {
    planCard.classList.remove("highlight");
  });
  let highlightedPlanIndex = Math.floor(sliderValueText / 10);
  if (highlightedPlanIndex >= planCards.length) {
    highlightedPlanIndex = planCards.length - 1;
  }
  planCards[highlightedPlanIndex].classList.add("highlight");

  //const sliderWidth = slider.offsetWidth;
  //const thumbWidth = 14; // Adjust this based on your slider thumb size
  //const position = (sliderValueText / slider.max) * 2*(sliderWidth - thumbWidth);
  //sliderValue.style.left = `${position}px`;
  document.getElementById("userCount").innerHTML = sliderValueText;
})