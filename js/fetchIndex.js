
//this create a singleton
const DoWork = function(){
    // const service_id = '';    

    function listServices(category){
        const listOptions = {
            method:'GET',

        };
        fetch(`http://127.0.0.1:3500/api/v1/services/category?category=${category}`, listOptions)
        .then((res) => res.json())
        .then((datas) => {
            console.log(datas);
            let layout = '';
            datas.services.forEach(data => {
                const row = `<div class="col-md-3">
                <a id="${data.id}" href="product_details.html"><img src="${data.logo}"></a>
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
            document.getElementById('fill-category').innerHTML = layout;
        })
    }

    return {
        listServices : listServices, 
    };
}();