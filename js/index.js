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
}

const getElementId =(a) => {
    const id= a.id;
    localStorage.setItem('id', id);
    window.location.href='product_details.html';
};

const getUrl = e => {
  const stationName = e.target.textContent;
//   console.log(stationName);
  switch (stationName) {
    case "Haulages":  
      document.getElementById('fill-category').innerHTML = '';
      DoWork.listServices(stationName);
      break;
    case "Pickup Services":
      document.getElementById('fill-category').innerHTML = '';
      DoWork.listServices(stationName);
      break;
    case "Hotel Reservation":
      document.getElementById('fill-category').innerHTML = '';
      DoWork.listServices(stationName);
      break;
    case "Door to Door Delivery":
      document.getElementById('fill-category').innerHTML = '';
      DoWork.listServices(stationName);
      break;
    case "Artisans":
      document.getElementById('fill-category').innerHTML = '';
      document.location.reload(true);
      DoWork.listServices(stationName);
      break;
    default:

      break;
  }
};



for (var i = 0; i < Flist.length; i++) {
  Flist[i].addEventListener("click", getUrl);
}

//get the id of each service
let getId = (id) => {
    localStorage.setItem('id', id);
    window.location.href = "product_details.html";
}

var Slist = document.getElementsByClassName("service-click");
for (var j = 0; j< Slist.length; j++){
    const id = Slist[j].id;
    Slist[j].addEventListener('click', function (){getId(id)});
}