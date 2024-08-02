document.addEventListener('DOMContentLoaded', function () {
  // Load header
  fetch('header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header').innerHTML = data;
    });

  // Load footer
  fetch('footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer').innerHTML = data;
    });

  // Load add a review
  fetch('add_review.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('add-review').innerHTML = data;
    });

  // Make first words and colon bold
  const paragraphs = document.querySelectorAll('p.bold-first-words');

  paragraphs.forEach(paragraph => {
    const text = paragraph.innerHTML;
    const regex = /^([^:]+:)/; // Regex to match everything up to the first colon
    const match = text.match(regex);

    if (match) {
      const boldText = `<span class="first-words">${match[0]}</span>`;
      paragraph.innerHTML = text.replace(regex, boldText);
    }
  });

  // Filter by country
  const countryFilter = document.getElementById("country-filter");
  const placeCards = document.querySelectorAll(".place-card");

  countryFilter.addEventListener("change", function () {
    const selectedCountry = countryFilter.value;

    placeCards.forEach(card => {
      if (selectedCountry === "all") {
        card.style.display = "block";
      } else {
        if (card.getAttribute("data-country") === selectedCountry) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
});
