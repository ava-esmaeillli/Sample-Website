window.onload = function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      header.classList.toggle("active");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove("open");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add("open");
      }
    });
  });



};
