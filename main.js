const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".content");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("data-target");

    sections.forEach(section => {
      section.classList.remove("active");
    });

    document.getElementById(targetId).classList.add("active");
  });
});