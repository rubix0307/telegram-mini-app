let tg = window.Telegram.WebApp

tg.expand()
updateCSSVariables()




let init = document.getElementById('init')
let div = document.createElement('div');
div.innerHTML = `${tg.initDataUnsafe.user.id}`;;







