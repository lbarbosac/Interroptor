const bntLigar = document.getElementById('on')
const btnDesligar = document.getElementById('off')
const lampada = document.getElementById('lampada')

function lampadaOn () {
    lampada.src = './img/lampada-ligada.png';
};

function lampadaOff () {
    lampada.src = './img/lampada-desligada.png';
};

bntLigar.addEventListener('click', lampadaOn)
btnDesligar.addEventListener('click', lampadaOff)
