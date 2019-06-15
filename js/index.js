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

const getUrl = e => {
  const stationName = e.target.textContent;
//   console.log(stationName);
  switch (stationName) {
    case "Haulages":  
      console.log(stationName);
      document.getElementById('fill-category').innerHTML = '';
      DoWork.listServices(stationName);
      break;
    case "Pickup Services":
      console.log(stationName);
      document.getElementById('fill-category').innerHTML = '';
      DoWork.listServices(stationName);
      break;
    case "Hotel Reservation":
      console.log(stationName);
      document.getElementById('fill-category').innerHTML = '';
      DoWork.listServices(stationName);
      break;
    case "Door to Door Delivery":
      console.log(stationName);
      document.getElementById('fill-category').innerHTML = '';
      DoWork.listServices(stationName);
      break;
    case "Artisans":
      console.log(stationName);
      document.getElementById('fill-category').innerHTML = '';
      DoWork.listServices(stationName);
      break;
    default:

      break;
  }
};

for (var i = 0; i < Flist.length; i++) {
  Flist[i].addEventListener("click", getUrl);
}
