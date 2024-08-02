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
});
