const id = localStorage.getItem('id');
console.log(id);
GetService.listService(id);


document.getElementById('call-service').addEventListener('click', function(){
    const phoneNumber =  document.getElementById('phone-number').textContent;
    console.log(phoneNumber);
    window.location.href= `tel:+234${phoneNumber}`;
})