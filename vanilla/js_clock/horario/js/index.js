const horario = document.getElementById("hora-atualizada");

//Função que pega a hora do local e atualiza a cada segundo

//Caso a variável correspondente for menor que 10, adicionarar-se um 0 na frente do valor (será útil para a hora, os minutos e segundos)
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
} 

function atualizarHorario() {
    const now = new Date();
    let  minuto = addZero(now.getMinutes());
    let segundo = addZero(now.getSeconds());
    let hora = addZero(now.getHours());

    horario.innerHTML = `${hora}:${minuto}:${segundo}`;
    console.log(`${hora}:${minuto}:${segundo}`)
}
//Intervalo de 1000 milissegundos para atualizar o horário

setInterval(atualizarHorario, 1000);

//Função para mostrar o relógio e os ponteiros girando

setInterval(() => {
    date = new Date();
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    hour_rotation = 30 * hr + min / 2;
    minute_rotation = 6 * min;
    second_rotation = 6 * sec;
  
    hora.style.transform = `rotate(${hour_rotation}deg)`;
    minuto.style.transform = `rotate(${minute_rotation}deg)`;
    segundo.style.transform = `rotate(${second_rotation}deg)`;
}, 1000);