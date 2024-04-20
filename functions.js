function updateCSSVariables() {
  const themeParams = tg.themeParams;
  const root = document.documentElement;

  for (const key in themeParams) {
    if (themeParams.hasOwnProperty(key)) {
      const cssVarName = `--${key.replace(/_/g, '-')}`;
      root.style.setProperty(cssVarName, themeParams[key]);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menuItems = document.querySelectorAll('.menu li');
    const lines = document.querySelectorAll('.menu-btn .line'); // Выбираем элементы .line
    let isMenuVisible = false;

    menuBtn.addEventListener('click', function() {
        isMenuVisible = !isMenuVisible;
        const pause = 12;
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                if (isMenuVisible) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            }, index * pause);
        });

        // Добавляем или удаляем класс .rotate для .line в зависимости от состояния меню
        lines.forEach(line => {
            if (isMenuVisible) {
                line.classList.add('rotate');
            } else {
                line.classList.remove('rotate');
            }
        });
    });
});;