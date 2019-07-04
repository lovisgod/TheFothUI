
//this create a singleton
const update = function(){
    // const message = username +password;
    // let userdata = null;

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


    function updateServicewithimage(serviceName, serviceLogo, serviceCover, serviceMobile, serviceDetails, serviceCity, serviceCategory, serviceAddressOne, id) {
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
            method: 'PUT',
            headers: new Headers({
                'X-My-Custom-Header': 'value-v',
                'Authorization': token,
        }),
            body: formDatas,
        };

        fetch(`https://thefoth.herokuapp.com/api/v1/services/update-with-image?id=${id}`, postOptions)
        .then((res) => {
            if(res.ok){
                alert('Service Created updated');
                listServices();
                return res.json();
            } else {
                alert('Service Could not be updated');
                window.stop();
            }
        })
        .then((data) => {
        })
        .catch((err) => {
            alert(err);
        });
    }

    function updateServicewithnoimage(serviceName,  serviceMobile, serviceDetails, serviceCity, serviceCategory, serviceAddressOne, id) {
        const formDatas = new FormData();
        formDatas.append('name', serviceName);
        formDatas.append('mobile', serviceMobile);
        formDatas.append('details', serviceDetails);
        formDatas.append('city', serviceCity);
        formDatas.append('category',serviceCategory);
        formDatas.append('addressOne', serviceAddressOne);

        const token = localStorage.getItem('token');

        const postOptions = {
            method: 'PUT',
            headers: new Headers({
                'X-My-Custom-Header': 'value-v',
                'Authorization': token,
        }),
            body: formDatas,
        };

        fetch(`https://thefoth.herokuapp.com/api/v1/services/update-with-no-image?id=${id}`, postOptions)
        .then((res) => {
            if(res.ok){
                alert('Service Created updated');
                listServices();
                return res.json();
            } else {
                alert('Service Could not be updated');
                window.stop();
            }
        })
        .then((data) => {
        })
        .catch((err) => {
            alert(err);
        });
    }



    // delete service is handled in this function

    function deleteService(id) {
        const token = localStorage.getItem('token');

        const postOptions = {
            method: 'DELETE',
            headers: new Headers({
                'X-My-Custom-Header': 'value-v',
                'Authorization': token,
        })
        };

        fetch(`https://thefoth.herokuapp.com/api/v1/services/delete-service?id=${id}`, postOptions)
        .then((res) => {
            if(res.ok){
                loginIn.listServicesForUpdate();
                return res.json();
            } else {
                alert('Service Could not be deleted');
                window.stop();
            }
        })
        .then((data) => {
        })
        .catch((err) => {
            alert(err);
        });
    }


    return {
        updateServicewithimage: updateServicewithimage,
        updateServicewithnoimage:updateServicewithnoimage,
        deleteService: deleteService
    };
}();
