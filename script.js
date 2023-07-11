const submit = document.getElementById("submit");
const newpage = document.querySelector('.modal');
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById("cvc");
const form = document.getElementById("form")

const nameOutput = document.getElementsByClassName('name-output')[0];
const numberOutput = document.querySelector('.number-output');
const monthOutput = document.querySelector('.month-output');
const yearOutput = document.querySelector('.year-output');
const cvcOutput = document.querySelector('.cvc-output');



nameInput.addEventListener('input', function () {
  nameOutput.textContent = nameInput.value;
});
numberInput.addEventListener('input', function () {
  numberOutput.textContent = numberInput.value;
});
monthInput.addEventListener('input', function () {
  monthOutput.textContent = monthInput.value;
});
yearInput.addEventListener('input', function () {
  yearOutput.textContent = yearInput.value;
});
cvcInput.addEventListener('input', function () {
  cvcOutput.textContent = cvcInput.value;
});

function ValidateForm() {
  ValidateName();
  ValidateNumber();
  Validatecvc();
  Validatedate();
  if (ValidateName() && ValidateNumber() && Validatedate() && Validatecvc()) {
    console.log("all okay");
    updatecard()
    replacepage()
  } else {
    console.log("correct all errors");
    event.preventDefault();
  }


}
function replacepage() {
  form.style.display = "none";
  newpage.style.display = "block";

  event.preventDefault();
}
function replaceform() {
  newpage.style.display = "none";
  form.style.display = "block";
  form.reset();
}
function updatecard() {
  nameOutput.textContent = nameInput.value;
  numberOutput.textContent = numberInput.value;
  monthOutput.textContent = monthInput.value;
  yearOutput.textContent = yearInput.value;
  cvcOutput.textContent = cvcInput.value;
}

function ValidateName() {
  let name = document.getElementsByClassName("name-input")[0].value;
  let errorEmpty = document.getElementsByClassName("error empty")[0];
  let errorInvalid = document.getElementsByClassName("error invalid")[0];

  if (name === "") {
    errorEmpty.style.display = "block";
    return false;
  } else if (name[0] >= 0 && name[0] <= 9) {
    errorInvalid.style.display = "block";
    return false;
  } else {
    errorEmpty.style.display = "none";
    errorInvalid.style.display = "none";
    return true;
  }
}

function ValidateNumber() {
  let number = document.getElementsByClassName("number-input")[0].value;
  let errorEmpty = document.getElementsByClassName("error empty")[1];
  let errorInvalid = document.getElementsByClassName("error invalid")[1];
  const cardNumberRegex = /^(\d{4}\s){3}\d{4}$/;
  if (number.trim() === "") {
    errorEmpty.style.display = "block";
    return false;
  }
  else if (!cardNumberRegex.test(number)) {

    errorInvalid.style.display = "block";
    return false;
  }

  else if (isNaN(number.replace(/\s/g, ""))) {
    errorInvalid.style.display = "block";
    return false;

  } else {
    errorEmpty.style.display = "none";
    errorInvalid.style.display = "none";
    return true;
  }
}

function Validatedate() {
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let errorEmpty = document.getElementsByClassName("error empty")[2];
  let errorInvalid = document.getElementsByClassName("error invalid")[2];

  if (month == "" || year == "") {
    errorEmpty.style.display = "block";
    return false;
  }
  if (!(month > 0 && month < 13)) {
    errorInvalid.innerHTML = "Month is not in valid range";
    errorInvalid.style.display = "block";
    return false;
  }
  else if (isNaN(month) || isNaN(year)) {
    errorInvalid.style.display = "block";
    return false;
  } else {
    errorEmpty.style.display = "none";
    errorInvalid.style.display = "none";
    return true;
  }
}

function Validatecvc() {
  let cvc = document.getElementsByClassName("cvc-input")[0].value;
  let errorEmpty = document.getElementsByClassName("error empty")[3];
  let errorInvalid = document.getElementsByClassName("error invalid")[3];

  if (cvc === "") {
    errorEmpty.style.display = "block";
    return false;
  } else if (isNaN(cvc)) {
    errorInvalid.style.display = "block";
    return false;
  } else {
    errorEmpty.style.display = "none";
    errorInvalid.style.display = "none";
    return true;
  }
}


