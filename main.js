let date = new Date();

//console.log (date)

const nameMonth = ["Enero","Febrero","Marzo","Abril","Mayo","Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Dieciembre"];

let day = date.getDate();
let month = nameMonth[date.getMonth()];
let year = date.getFullYear();

document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = year;

mueveReloj = ()=> {
    let date = new Date();
    let hora = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    
    //console.log(hora,minute,seconds)

    let stgHora="";
    let stgMinuto="";
    let stgSegundo="";

    


    
    let concatHora = hora + ":" + minute + ":" + seconds
    
    //console.log(concatHora)

    document.getElementById("conthours").innerHTML=concatHora
    
    setTimeout("mueveReloj()",1000)
}

