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

const reloadPage = () => {
  document.location.reload(true);
};

const getElementId = a => {
  const id = a.id;
  localStorage.setItem("id", id);
  window.location.href = "product_details.html";
};

const getUrl = e => {
  const stationName = e.target.textContent;
  //   console.log(stationName);
  switch (stationName) {
    case "Haulages":
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        document.getElementById("side-menu").style.display = "none";
        document.getElementById("menu-btn").style.display = "block";
        document.getElementById("close-btn").style.display = "none";
      } else {
        document.getElementById("side-menu").style.display = "block";
      }
      document.getElementById("fill-category").innerHTML = "";
      DoWork.listServices(stationName);
      break;
    case "Pickup Services":
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        document.getElementById("menu-btn").style.display = "block";
        document.getElementById("close-btn").style.display = "none";
        document.getElementById("side-menu").style.display = "none";
      } else {
        document.getElementById("side-menu").style.display = "block";
      }
      document.getElementById("fill-category").innerHTML = "";
      DoWork.listServices(stationName);
      break;
    case "Hotel Reservation":
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        document.getElementById("menu-btn").style.display = "block";
        document.getElementById("close-btn").style.display = "none";
        document.getElementById("side-menu").style.display = "none";
      } else {
        document.getElementById("side-menu").style.display = "block";
      }
      document.getElementById("fill-category").innerHTML = "";
      DoWork.listServices(stationName);
      break;
    case "Door to Door Delivery":
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        document.getElementById("menu-btn").style.display = "block";
        document.getElementById("close-btn").style.display = "none";
        document.getElementById("side-menu").style.display = "none";
      } else {
        document.getElementById("side-menu").style.display = "block";
      }
      document.getElementById("fill-category").innerHTML = "";
      DoWork.listServices(stationName);
      break;
    case "Artisans":
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        document.getElementById("menu-btn").style.display = "block";
        document.getElementById("close-btn").style.display = "none";
        document.getElementById("side-menu").style.display = "none";
      } else {
        document.getElementById("side-menu").style.display = "block";
      }
      document.getElementById("fill-category").innerHTML = "";
      // document.location.reload(true);
      DoWork.listServices(stationName);
      break;
    default:
      break;
  }
};

for (var i = 0; i < Flist.length; i++) {
  Flist[i].addEventListener("click", getUrl);
}

//get the id of each service and navigate to the product details page
let getId = id => {
  localStorage.setItem("id", id);
  window.location.href = "product_details.html";
};

// handle click of each products
var Slist = document.getElementsByClassName("service-click");
for (var j = 0; j < Slist.length; j++) {
  const id = Slist[j].id;
  Slist[j].addEventListener("click", function() {
    getId(id);
  });
}

// handle click of each slides
var slist = document.getElementsByClassName("service-slide");
for (var j = 0; j < slist.length; j++) {
  const id = slist[j].id;
  slist[j].addEventListener("click", function() {
    getId(id);
  });
}


var search_input = document.getElementById('search-field');
var search_button = document.getElementById('search-button');

search_button.addEventListener('click', function() {
  document.getElementById("fill-category").innerHTML = "";
  DoWork.listRandomServices(search_input.value);
})