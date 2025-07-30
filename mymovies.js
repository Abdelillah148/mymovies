// search functionality
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search input");
    const films = document.querySelectorAll(".film");
  
    searchInput.addEventListener("keyup", function () {
      let value = this.value.toLowerCase();
  
      films.forEach(film => {
        let title = film.querySelector("h4").textContent.toLowerCase();
        if (title.includes(value)) {
          film.style.display = "block";
        } else {
          film.style.display = "none";
        }
      });
    });
  });
  

