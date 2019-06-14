document.getElementById("service").style.display = "none";
document.getElementById("footer-admin").style.display = "none";
document.getElementById("side-menu").style.display = "none";
document.getElementById("admin-categories").style.display = "none";
var Flist = document.getElementsByTagName("li");

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

const getUrl = e => {
  var stationName = e.target.textContent;
  switch (stationName) {
    case "Add Service":
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
      document.getElementById("service").style.display = "block";
      document.getElementById("admin-categories").style.display = "none";
      document.getElementById("add-serviceTitle").innerHTML =
        "ADMIN ADD SERVICE";
      break;
    case "Service":
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
      document.getElementById("service").style.display = "none";
      document.getElementById("admin-categories").style.display = "block";
      break;
    case "Update Service":
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
      document.getElementById("service").style.display = "block";
      document.getElementById("admin-categories").style.display = "none";
      document.getElementById("add-serviceTitle").innerHTML = "Update Serivice";
      break;
    case "Log Out":
      document.querySelector(".login-area").style.display = "block";
      document.getElementById("service").style.display = "none";
      document.getElementById("admin-categories").style.display = "none";
      document.getElementById("footer-admin").style.display = "none";
      document.getElementById("side-menu").style.display = "none";
      break;
    default:
      document.querySelector(".login-area").style.display = "block";
      document.getElementById("footer-admin").style.display = "none";
      document.getElementById("side-menu").style.display = "none";
      break;
  }
};

const login = document.querySelector("#login-btn");
login.addEventListener("click", () => {
  document.querySelector(".login-area").style.display = "none";
  document.getElementById("service").style.display = "block";
  document.getElementById("footer-admin").style.display = "block";
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
});

const submit = document.querySelector("#btn-submitService");
submit.addEventListener("click", () => {
  document.getElementById("service").style.display = "none";
  document.getElementById("admin-categories").style.display = "block";
});

for (var i = 0; i < Flist.length; i++) {
  console.log(Flist[i]);
  Flist[i].addEventListener("click", getUrl);
}


//set image to the placeHolder
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('blah')
                .src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// set image for the cover placeholder

function readURLTwo(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('blah2')
                .src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}