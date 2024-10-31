function calculateFootprint() {
    let electricidad = parseFloat(document.getElementById("electricidad").value);
    let paneles = parseFloat(document.getElementById("paneles").value);
    let transporte = parseFloat(document.getElementById("transporte").value);
    let combustible = parseFloat(document.getElementById("combustible").value);
    let carne = parseFloat(document.getElementById("carne").value);
    let residuos = parseFloat(document.getElementById("residuos").value);
    let agua = parseFloat(document.getElementById("agua").value);
    
    // Fórmula más precisa para calcular huella ecológica
    let huella = (electricidad + paneles) * 0.5 + transporte + combustible + carne * 1.2 + residuos * 0.5 + agua * 0.3;
    
    // Convertir a hectáreas globales
    let hectareasGlobales = huella.toFixed(2);

    // Mostrar el resultado
    document.getElementById("result").innerHTML = "Tu huella ecológica es: " + hectareasGlobales + " hectáreas globales (gha).";
}

    const openModal = document.querySelector('.her_cta');

    const modal = document.querySelector('.modal');

    const closeModal = document.querySelector('.modal_close');

    openModal.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.classList.add('modal--show');
    });
    closeModal.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.classList.remove('modal--show');
    });
    

    function boton(){
        var img = document.getElementById('img-bloq')
        if(img.style.display === "none"){
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    }
    
    