// search-script.js

function filterItems() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const results = document.getElementById("search-results");
  const items = results.getElementsByTagName("li");

  let hasResults = false;

  for (let item of items) {
    const text = item.textContent.toLowerCase();
    if (text.includes(input)) {
      item.style.display = "block";
      hasResults = true;
    } else {
      item.style.display = "none";
    }
  }

  // Show results only if there are matches and the input is focused
  results.style.display = hasResults ? "block" : "none";
}

function toggleResults(show) {
  const results = document.getElementById("search-results");
  results.style.display = show ? "block" : "none";
}
