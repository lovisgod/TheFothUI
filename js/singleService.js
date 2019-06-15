const id = localStorage.getItem('id');
GetService.listService(id);


document.getElementById('call-service').addEventListener('click', function(){
    const phoneNumber =  document.getElementById('phone-number').textContent;
    window.location.href= `tel:+234${phoneNumber}`;
})