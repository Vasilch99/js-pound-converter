// Import stylesheets
import "./style.css";

// Write Javascript code!

const pounds = document.getElementById("right");
const kilos = document.getElementById("left");
const select = document.getElementById("select-right");
const select2 = document.getElementById("select-left");

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

pounds.addEventListener("input", updateValuePounds);
kilos.addEventListener("input", updateValueKilos);

function updateValuePounds() {
  if (select.options[select.selectedIndex].value === "pounds") { 
    const poundsInt = parseInt(pounds.value) * 0.45359237;

    if (poundsInt !== null) {
      kilos.value = round(poundsInt, 6);
    } else {
      kilos.value = "";
    }
  } else if (select.options[select.selectedIndex].value === "kilos") {
    const kilosInt = parseInt(pounds.value) / 0.45359237;

    if (kilosInt !== null) {
      kilos.value = round(kilosInt, 6);
    } else {
      kilos.value = "";
    }
  }
}

function updateValueKilos() {
  const kilosInt = parseInt(kilos.value) / 0.45359237;

  if (kilosInt !== null) {
    pounds.value = round(kilosInt, 6);
  } else {
    pounds.value = "";
  }
}

select.addEventListener("change", handleSelect);
select2.addEventListener("change", handleSelect2);

function handleSelect() {
  if (select.options[select.selectedIndex].value === "kilos") {
    const newVal = pounds.value;
    const newKilosInt = parseInt(newVal) / 0.45359237;
    kilos.value = round(newKilosInt, 6);
    select2.selectedIndex = "1";
  } else if (select.options[select.selectedIndex].value === "pounds") {
    const newVal = pounds.value;
    const newPoundsInt = parseInt(newVal) * 0.45359237;
    kilos.value = round(newPoundsInt, 6);
    select2.selectedIndex = "0";
  }
}

function handleSelect2() {
  if (select2.options[select.selectedIndex].value === "kilos") {
    const newVal = pounds.value;
    const newKilosInt = parseInt(newVal) * 0.45359237;
    kilos.value = round(newKilosInt, 6);
    select.selectedIndex = "0";
  } else if (select.options[select.selectedIndex].value === "pounds") {
    const newVal = pounds.value;
    const newPoundsInt = parseInt(newVal) / 0.45359237;
    kilos.value = round(newPoundsInt, 6);
    select.selectedIndex = "1";
  }
}
