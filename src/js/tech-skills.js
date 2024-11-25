function duplicateContent(containerId) {
  const container = document.getElementById(containerId);
  const originalContent = container.querySelector('.skills__inner');

  // Створюємо достатню кількість клонів для безперервної анімації
  for (let i = 0; i < 4; i++) {
    const clone = originalContent.cloneNode(true);
    container.appendChild(clone);
  }

  const setContentWidth = () => {
    const itemsWidth = originalContent.offsetWidth;
    // Встановлюємо ширину контейнера рівну ширині всіх елементів
    container.style.width = `${itemsWidth * 5}px`; // 5 копій (оригінал + 4 клони)
  };

  // Викликаємо функцію після завантаження всіх ресурсів
  if (document.readyState === 'complete') {
    setContentWidth();
  } else {
    window.addEventListener('load', setContentWidth);
  }

  // Оновлюємо розміри при зміні розміру вікна
  window.addEventListener('resize', setContentWidth);
}

// Ініціалізуємо після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  duplicateContent('top-skills');
  duplicateContent('bottom-skills');
});
