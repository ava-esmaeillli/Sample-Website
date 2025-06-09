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

  const sidebarLabels = document.querySelectorAll('.sidebarLabels');
  const sidebarContents = document.querySelectorAll('.sidebarContents');

  sidebarContents.forEach(content => {
    content.style.display = 'none';
  });

  sidebarLabels.forEach((label, index) => {
    label.addEventListener('click', () => {
      sidebarContents.forEach(content => {
        content.style.display = 'none';
      });
      sidebarContents[index].style.display = 'flex';
    });
  });


};
