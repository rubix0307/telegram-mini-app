const tg = window.Telegram.WebApp()

const body = document.querySelector('body');
const div = document.createElement('div');
div.innerHTML = tg.initData;
body.appendChild(div);