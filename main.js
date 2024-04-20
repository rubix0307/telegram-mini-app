let tg = window.Telegram.WebApp

let init = document.getElementById('init')
let div = document.createElement('div');
div.innerHTML = `${tg.initDataUnsafe.user}`;
init.appendChild(div);