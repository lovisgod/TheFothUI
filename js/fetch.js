
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
                'Content-Type': 'text/plain',
                'X-My-Custom-Header': 'value-v',
                'Authorization': token,
        }),
            body: formDatas,
        };

        fetch('http://127.0.0.1:3500/api/v1//thefoth-admin/create', postOptions)
        .then((res) => {
            if(res.ok){
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
        addService : addService    
    };
}();


