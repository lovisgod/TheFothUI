
//this create a singleton
const loginIn = function(){
    // const message = username +password;
    // let userdata = null;

    function handleLogin(username, password, userdata){
        const formData = new FormData();
        formData.append('username',username);
        formData.append('password', password);
        const options = {
            method: 'POST',
            body: formData,
        };
        fetch('https://thefoth.herokuapp.com/api/v1/thefoth-admin', options)
        .then((res) => {
            if (res.ok){
                alert('Successfully Logged In');
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
                return res.json();
            }else {
                alert('Unsuccessful!!!!!!!!!');
                window.stop();
            }
            
        })
        .then((data)=> {

            localStorage.setItem('token','Bearer ' + data.token)
        })
        .catch((err) => console.log(err));
    }

    function listServices(){
        const listOptions = {
            method:'GET',

        };
        fetch('https://thefoth.herokuapp.com/api/v1/services', listOptions)
        .then((res) => res.json())
        .then((datas) => {
            console.log(datas);
            let layout = '';
            datas.services.forEach(data => {
                const row = `<div class="col-md-3">
                <a id="${data.id}" href="#"><img src="${data.logo}"></a>
                <div class="product-bottom text-center">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                    <h3>${data.name}</h3>
                </div>
             </div>`;
             layout += row;
            });
            document.getElementById('filled').innerHTML = layout;
        });
    }

    function addService(serviceName, serviceLogo, serviceCover, serviceMobile, serviceDetails, serviceCity, serviceCategory, serviceAddressOne) {
        const formDatas = new FormData();
        formDatas.append('name', serviceName);
        formDatas.append('logo', serviceLogo);
        formDatas.append('cover',serviceCover);
        formDatas.append('mobile', serviceMobile);
        formDatas.append('details', serviceDetails);
        formDatas.append('city', serviceCity);
        formDatas.append('category',serviceCategory);
        formDatas.append('addressOne', serviceAddressOne);

        const token = localStorage.getItem('token');

        const postOptions = {
            method: 'POST',
            headers: new Headers({
                'X-My-Custom-Header': 'value-v',
                'Authorization': token,
        }),
            body: formDatas,
        };

        fetch('https://thefoth.herokuapp.com/api/v1/thefoth-admin/create', postOptions)
        .then((res) => {
            if(res.ok){
                alert('Service Created Successfully');
                listServices();
                return res.json();
            } else {
                alert('Service Could not be added');
                window.stop();
            }
        })
        .then((data) => {
        })
        .catch((err) => {
            alert(err);
        });
    }


    function listServicesForUpdate(){
        const listOptions = {
            method:'GET',

        };
        fetch('https://thefoth.herokuapp.com/api/v1/services', listOptions)
        .then((res) => res.json())
        .then((datas) => {
            let layout = '';
            datas.services.forEach(data => {
                const row = `<option value="${data.id}">${data.name}</option>`;
             layout += row;
            });
            document.getElementById('service-option').innerHTML = layout;
        });
    }

    // handle update fields update
 function updateServiceForm(id){
    const listOptions = {
        method:'GET',

    };
    fetch(`https://thefoth.herokuapp.com/api/v1/services/single?id=${id}`, listOptions)
    .then((res) => res.json())
    .then((datas) => {
        document.getElementById("sname").value = datas.service.name;
        document.getElementById("phone").value = datas.service.mobile;
        document.getElementById("address").value = datas.service.address;
        document.getElementById("city").value= datas.service.city;
        document.getElementById("category").value = datas.service.category;
        document.getElementById("blah").src= datas.service.logo;
        document.getElementById("blah2").src = datas.service.cover;
        document.getElementById("details").value = datas.service.details;   
    });
   }

    return {
        handleLogin : handleLogin,
        addService : addService,
        listServices : listServices, 
        listServicesForUpdate: listServicesForUpdate,
        updateServiceForm: updateServiceForm
    };
}();
