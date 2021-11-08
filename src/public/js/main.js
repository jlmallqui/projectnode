document.getElementById('inicio').value = new Date().toDateInputValue();

function updatefecha(e){
    const fechaFinal = document.getElementById('fin');    
    fechaFinal.value = document.getElementById('inicio').value; 
}