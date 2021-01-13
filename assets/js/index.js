(function () {
  let startYear = document.getElementById("footer-start-year").innerText;
  let endYear = new Date().getFullYear();
  if (startYear.toString() !== endYear.toString()) {
    document.getElementById("footer-end-year").innerText = "-" + endYear;
  }
})();
