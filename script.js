function numeros(e){
    key=e.keycode || e.wich;
    teclado=string.fromCharCode(key);
    numeros="0123456789";
    especiais="8-37-39-46";
    tecla_especial=false;
    for(var i in especiais){
        if(key==especiais[i]){
            tecla_especial=true;
        }
    }
    if(numeros.indexOf(teclado)==-1 && !tecla_especial){
        return false;

    }
    function retornar(num){

        var anterior=document.fo.valores.value;
        document.getElementById("valores").value=anterior+num;
    }
}
