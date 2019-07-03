// keep this

// // 


function updateService(id){
const service_id = id;
localStorage.setItem("service_id", service_id);
console.log(service_id);    
document.getElementById("edit_services").style.display = "none";
document.getElementById("service").style.display = "block";
document.getElementById("admin-categories").style.display = "none";
document.getElementById("add-serviceTitle").innerHTML = "Update Serivice";
document.getElementById("btn-submitService").value= "Update";
loginIn.updateServiceForm(service_id);
}


// Add service here
const submit = document.querySelector("#btn-submitService");
submit.addEventListener('click', () => {
//   document.getElementById("service-option-option").style.display = "none";
  const id = localStorage.getItem("service_id");
  if (submit.value != 'Update'){
  
      const serviceName = document.getElementById("sname").value;
      const serviceMobile = document.getElementById("phone").value;
      const serviceAddress = document.getElementById("address").value;
      const serviceCity = document.getElementById("city").value;
      const serviceCategory = document.getElementById("category").value;
      const serviceLogo = document.getElementById("logo-image").files[0];
      const serviceCover = document.getElementById("cover-image").files[0];
      const serviceDetails = document.getElementById("details").value;
    
      loginIn.addService(
        serviceName,
        serviceLogo,
        serviceCover,
        serviceMobile,
        serviceDetails,
        serviceCity,
        serviceCategory,
        serviceAddress
      );
      document.getElementById("service").style.display = "none";
      document.getElementById("admin-categories").style.display = "block";
  } else{
    document.getElementById("service").style.display = "none";
    document.getElementById("admin-categories").style.display = "block";
    if (document.getElementById("logo-image").files[0] == null){
      const serviceName = document.getElementById("sname").value;
      const serviceMobile = document.getElementById("phone").value;
      const serviceAddress = document.getElementById("address").value;
      const serviceCity = document.getElementById("city").value;
      const serviceCategory = document.getElementById("category").value;
      const serviceDetails = document.getElementById("details").value;
      update.updateServicewithnoimage(serviceName, serviceMobile, serviceDetails, serviceCity,serviceCategory, serviceAddress,id);
    }else {
      const serviceName = document.getElementById("sname").value;
      const serviceMobile = document.getElementById("phone").value;
      const serviceAddress = document.getElementById("address").value;
      const serviceCity = document.getElementById("city").value;
      const serviceCategory = document.getElementById("category").value;
      const serviceLogo = document.getElementById("logo-image").files[0];
      const serviceCover = document.getElementById("cover-image").files[0];
      const serviceDetails = document.getElementById("details").value;
      update.updateServicewithimage(serviceName,serviceLogo,serviceCover,serviceMobile,serviceDetails,serviceCity,serviceCategory, serviceAddress, id);
    }
  }
})