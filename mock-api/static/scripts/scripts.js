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

  // Make first two words and colon bold
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
});
