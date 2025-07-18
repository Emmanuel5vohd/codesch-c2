let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#submit");

function addDetails() {
  let fnameValue = fname.value;
  let lnameValue = lname.value;
  let emailValue = email.value;
  let numberValue = number.value;
  let passwordValue = password.value;

  if (
    fnameValue == "" ||
    lnameValue == "" ||
    emailValue == "" ||
    numberValue == "" ||
    passwordValue == ""
  ) {
    alert("All fields are required.");
    return;
  }

  let details = {
    fname: fnameValue,
    lname: lnameValue,
    email: emailValue,
    number: numberValue,
    password: passwordValue,
  };

  localStorage.setItem("userDetails", JSON.stringify(details));
  //   localStorage.setItem("lname", lnameValue);
  //   localStorage.setItem("email", emailValue);
  //   localStorage.setItem("number", numberValue);
  //   localStorage.setItem("password", passwordValue);

  console.log(
    "This is my details: ",
    fnameValue,
    lnameValue,
    emailValue,
    numberValue,
    passwordValue
  );

  fname.value = "";
  lname.value = "";
  email.value = "";
  number.value = "";
  password.value = "";
}

submitBtn.addEventListener("click", () => {
  addDetails();

  let getDetailsFromLocalStorage = localStorage.getItem("userDetails");

  let detailsObj = JSON.parse(getDetailsFromLocalStorage);
  console.log("Details from localStorage: ", detailsObj, detailsObj.email);
});
