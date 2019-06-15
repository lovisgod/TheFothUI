
//this create a singleton
const GetService = function(){
    // const service_id = '';    

    function listService(id){
        const listOptions = {
            method:'GET',

        };
        fetch(`http://127.0.0.1:3500/api/v1/services/single?id=${id}`, listOptions)
        .then((res) => res.json())
        .then((datas) => {
            console.log(datas);
            document.getElementById('service-name').textContent = datas.service.name;
            document.getElementById('service-image').src = datas.service.cover;
            document.getElementById('product-summary').textContent = datas.service.details;
            document.getElementById('service-category').textContent = datas.service.category;
            document.getElementById('phone-number').textContent = datas.service.mobile;
            // document.getElementById('fill-category').innerHTML = layout;
        })
    }

    return {
        listService : listService, 
    };
}();
