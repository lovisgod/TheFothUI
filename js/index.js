var Flist = document.getElementsByTagName("li");

const openmenu =()=>{
    document.getElementById("side-menu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="block";

};

const closemenu =()=>{
    document.getElementById("side-menu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";

};

const getUrl =(e)=> {
    
    const stationName = e.target.textContent;
    console.log(stationName);
};

for (var i = 0 ; i < Flist.length; i++) {
    console.log(Flist[i]);
    Flist[i].addEventListener('click', getUrl);
  } 
