document.getElementById("service").style.display = "none";
document.getElementById("service-option-option").style.display = "none";
document.getElementById("footer-admin").style.display = "none";
document.getElementById("side-menu").style.display = "none";
document.getElementById("admin-categories").style.display = "none";
document.getElementById("edit_services").style.display = "none";
var Flist = document.getElementsByTagName("li");
// let selectedService = serviceOption.value;
// let selectedService = serviceOption.options[serviceOption.selectedIndex];
// console.log(selectedService)

const openmenu = () => {
  document.getElementById("side-menu").style.display = "block";
  document.getElementById("menu-btn").style.display = "none";
  document.getElementById("close-btn").style.display = "block";
};

const closemenu = () => {
  document.getElementById("side-menu").style.display = "none";
  document.getElementById("menu-btn").style.display = "block";
  document.getElementById("close-btn").style.display = "none";
};

//handle admin side menu
const getUrl = e => {
  var stationName = e.target.textContent;
  switch (stationName) {
    case "Add Service":
        document.getElementById("service-option-option").style.display = "none";
        document.getElementById("edit_services").style.display = "none";
      document.querySelector(".login-area").style.display = "none";
      // this checks if browser is mobile
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        document.getElementById("side-menu").style.display = "none";
      } else {
        document.getElementById("side-menu").style.display = "block";
      }
      document.getElementById("service").style.display = "block";
      document.getElementById("admin-categories").style.display = "none";
      document.getElementById("add-serviceTitle").innerHTML =
        "ADMIN ADD SERVICE";
      break;
    case "Service":
        document.getElementById("service-option-option").style.display = "none";
      document.querySelector(".login-area").style.display = "none";
      document.getElementById("edit_services").style.display = "none";
      // this checks if browser is mobile
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        document.getElementById("side-menu").style.display = "none";
      } else {
        document.getElementById("side-menu").style.display = "block";
      }
      document.getElementById("service").style.display = "none";

      document.getElementById("admin-categories").style.display = "block";
      loginIn.listServices();
      break;
    case "Edit Service":
      document.querySelector(".login-area").style.display = "none";
      // this checks if browser is mobile
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        // some code..
        document.getElementById("side-menu").style.display = "none";
      } else {
        document.getElementById("side-menu").style.display = "block";
      } 
      loginIn.listServicesForUpdate();
      document.getElementById("admin-categories").style.display = "none";
      document.getElementById("edit_services").style.display = "block";
      document.getElementById("service").style.display = "none";
      break;
    case "Log Out":
      document.getElementById("service-option-option").style.display = "none";
      document.querySelector(".login-area").style.display = "block";
      document.getElementById("service").style.display = "none";
      document.getElementById("admin-categories").style.display = "none";
      document.getElementById("footer-admin").style.display = "none";
      document.getElementById("side-menu").style.display = "none";
      document.getElementById("edit_services").style.display = "none";
      break;
    default:
      document.getElementById("service-option-option").style.display = "none";
      document.querySelector(".login-area").style.display = "block";
      document.getElementById("footer-admin").style.display = "none";
      document.getElementById("side-menu").style.display = "none";
      document.getElementById("edit_services").style.display = "none";
      break;
  }
};

// login method
const login = document.querySelector("#login-btn");
login.addEventListener("click", () => {
  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;
  loginIn.handleLogin(username, password);
});












// this handle clicks for li

for (var i = 0; i < Flist.length; i++) {
  Flist[i].addEventListener("click", getUrl);
}

//set image to the placeHolder
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("blah").src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}

// set image for the cover placeholder

function readURLTwo(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("blah2").src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}


