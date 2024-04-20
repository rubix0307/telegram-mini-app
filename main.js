const tg = window.Telegram.WebApp

const init = document.getElementById('init')
const div = document.createElement('div');
div.innerHTML = tg.initData;
init.appendChild(div);