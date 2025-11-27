document.getElementById("showCV").addEventListener("click", function() {
  const cv = document.getElementById("cvContent");
  cv.style.display = "block";
  this.style.display = "none";

  const sections = document.querySelectorAll("#cvContent section");
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("visible");
    }, index * 300);
  });
});
