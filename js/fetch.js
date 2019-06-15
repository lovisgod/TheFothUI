
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
        fetch('http://127.0.0.1:3500/api/v1/thefoth-admin', options)
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
        .then((data)=> {console.log(data)
            localStorage.setItem('token','Bearer ' + data.token)})
        .catch((err) => console.log(err));
    }

    function listServices(){
        const listOptions = {
            method:'GET',

        };
        fetch('http://127.0.0.1:3500/api/v1/services', listOptions)
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
            console.log(layout);
            document.getElementById('filled').innerHTML = layout;
        })
    }

    /* <div class="row">
<div class="col-md-3">
    <a href="#"><img src="images/laundary.jpg"></a>
    <div class="product-bottom text-center">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-half-o"></i>
        <h3>Laundary A Inc</h3>
    </div>
</div> */


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

        fetch('http://127.0.0.1:3500/api/v1/thefoth-admin/create', postOptions)
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
            console.log(data);
        })
        .catch((err) => {
            alert(err);
        });
    }

    return {
        handleLogin : handleLogin,
        addService : addService,
        listServices : listServices, 
    };
}();
