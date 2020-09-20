const mainBnt = document.getElementById('btnId');

mainBnt.addEventListener("click", takeOrder);

function takeOrder () {
    var pomidorowy = document.getElementById('pomidorowy');
    console.log(pomidorowy.checked);
    var czosnkowy = document.getElementById('czosnkowy');
    console.log(czosnkowy.checked);
    var ostryPomidorowy = document.getElementById('ostryPomidorowy');
    console.log(ostryPomidorowy.checked);
}