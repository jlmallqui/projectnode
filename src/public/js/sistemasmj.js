$(document).ready(function() {    
    setTimeout(function() {
        $(".ap1").fadeIn(2500);
    });

  
    const btnlogin = document.querySelector('#btnlogin');    

    btnlogin.addEventListener('click',() =>{ 
        loadtest();
    });


    function loadtest(){
        fetch('/api/users/listado', {method:'GET'})
        .then(res=> res.json())
        .then (data=>{ 
            console.log(data);
            const clientes = document.querySelector('#listado-clientes');
            let html = '';
           
            data.forEach(cliente => {
                html += `<div> ${cliente.pernom} </div>`
            });
            alert(html);
            clientes.innerHTML = html;
        })
    };


    $("#add_categoria").on('click', function(event){
        event.preventDefault();
        event.stopPropagation();
        


    })




});




 