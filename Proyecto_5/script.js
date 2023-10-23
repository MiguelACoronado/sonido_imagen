let esqueleto ="off";
let esqueletoStop = document.getElementById("esqueletoQuieto");
let botonSonido = new Audio ('./sound/botonbailar.mp3');
let botonaudio = new Audio ('./sound/audio.mp3');

function bailar(){
    if(esqueleto == "off"){
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonaudio.play();
        })
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
        })
    } else {
        esqueleto = "off";
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonaudio.pause();
        })
    }

}