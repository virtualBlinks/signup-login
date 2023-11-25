let inputFirstName = document.getElementById("inputFirstName")
let inputLastName = document.getElementById("inputLastName")
let inputDob = document.getElementById("inputDob")
let inputEmail = document.getElementById("inputEmail")
let inputPassword = document.getElementById("inputPassword")
let inputCp = document.getElementById("inputCp")
let check = document.getElementById("check")
let display1 = document.getElementById("display1")
let inpute = document.querySelectorAll(".inpute");
let validation = document.getElementById("validation")
let display2= document.getElementById("display2")
let inputemail = document.getElementById("inputemail")
let inputpass = document.getElementById("inputpass")

let details = [];

function display(el) {
  el.target.style.backgroundColor = "green";
  el.target.style.color = "white";
  el.target.style.border = "none";

  inpute.forEach(inpute => {
      inpute.style.backgroundColor = "lightgreen";
      inpute.style.color = "white";

      if (inpute.value === "") {
          inpute.style.backgroundColor = "lightcoral";
          inpute.style.color = "black";
          display1.style.display = "none";
          validation.innerHTML = "Fill all information";
          validation.style.color = "red"
      } else if (inpute.value === inpute.length) {
          inpute.style.backgroundColor = "lightgreen";
          inpute.style.color = "white";
          validation.innerHTML = "Sign Up Successful";
          validation.style.color = "Green"
      }
  });
      
  let fullDetails = {
      firstName: inputFirstName.value,
      lastName: inputLastName.value,
      dob: inputDob.value,
      email: inputEmail.value,
      password: inputPassword.value,
      confirmPassword: inputCp.value,
      check: check.checked
  };

  details.unshift(fullDetails);

  for (let index = 0; index < details.length; index++) {
      const element = details[index];
      display1.innerHTML += `
          <tr>
              <td>${element.firstName}</td>
              <td>${element.lastName}</td>
              <td>${element.dob}</td>
              <td>${element.email}</td>
              <td>${element.password}</td>           
              <td>${element.confirmPassword}</td>           
              <td>${element.check}</td>           
          </tr>
      `;
  }
}

function signing() {
          for (let index = 0; index < details.length; index++) {
              const element = details[index];
              if (inputemail.value.includes(element.email) && inputpass.value.includes(element.password)) {
                  display2.innerHTML = "log in succesful";
              } else {
                  display2.innerHTML = "Please enter valid login details";
              }
          }
      }
    

     