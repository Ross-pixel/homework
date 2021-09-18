let inValue = document.querySelector(".value-setting-in");
let outValue = document.querySelector(".value-setting-out");
let but = document.querySelector(".convert");
let input = document.querySelector("input");
let output = document.querySelector(".output");

but.onclick = function () {
  output.textContent = input.textContent + ' А конверталку остальную долго делать :))';
};
