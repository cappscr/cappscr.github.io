const copyrightYear = document.getElementById('copyright-year');
const checkYear = new RegExp(/20\d\d/);
const timeNow = new Date();

copyrightYear.innerText = copyrightYear.innerText.replace(checkYear, timeNow.getFullYear());
