
const conversions = {
//Converting the Length
  "km-mi": n => n * 0.621371,
  "mi-km": n => n * 1.609344,
  "m-ft": n => n * 3.28084,
  "ft-m": n => n * 0.3048,
  "m-yd": n => n * 1.09361,
  "yd-m": n => n * 0.9144,
  "cm-in": n => n * 0.393701,
  "in-cm": n => n * 2.54,

  //Converting the Weight

  "kg-lb": n => n * 2.20462,
  "lb-kg": n => n * 0.453592,
  "g-oz": n => n * 0.035274,
  "oz-g": n => n * 28.3495,

  //Converting The temprature

  "c-f": n => n * 9 / 5 + 32,
  "f-c": n => (n - 32) * 5 / 9,
  "c-k": n => n + 273.15,
  "k-c": n => n - 273.15,

  //Converting the Volume


  "l-gal": n => n * 0.264172,
  "gal-l": n => n * 3.78541,
  "ml-floz": n => n * 0.033814,
  "floz-ml": n => n * 29.5735,

  //Converting the Speed

  "kmph-mph": n => n * 0.621371,
  "mph-kmph": n => n * 1.609344,
  "ms-kmh": n => n * 3.6,

  //Converting the Time

  "h-min": n => n * 60,
  "min-s": n => n * 60,
  "d-h": n => n * 24,

  //Converting the Area

  "sqm-sqft": n => n * 10.7639,
  "ac-ha": n => n * 0.404686
};

const form = document.getElementById("form");
const select = document.getElementById("type");
const input = document.getElementById("number");
const result = document.getElementById("result");



form.addEventListener("submit", function (event) {
  event.preventDefault();

  const number = parseFloat(input.value);
  if (isNaN(number)) {
    result.textContent = "Please enter a number.";
    return;
  }

  const answer = conversions[select.value](number);

  
  const text = select.options[select.selectedIndex].text;
  const units = text.split(" to ");


  const rounded = Math.round(answer * 10000) / 10000;

  result.textContent = number + " " + units[0] + " = " + rounded + " " + units[1];
});