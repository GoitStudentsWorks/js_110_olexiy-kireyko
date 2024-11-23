function duplicateContent(containerId) {
  const container = document.getElementById(containerId);
  const originalContent = container.querySelector('.skills__inner');

  // Создаем точную копию содержимого
  const clone = originalContent.cloneNode(true);
  container.appendChild(clone);

  // Вычисляем общую ширину контента для правильной анимации
  const setContentWidth = () => {
    const itemsWidth = originalContent.offsetWidth;
    container.style.width = `${itemsWidth * 2}px`;
  };

  // Устанавливаем ширину при загрузке и при изменении размера окна
  window.addEventListener('load', setContentWidth);
  window.addEventListener('resize', setContentWidth);
}

document.addEventListener('DOMContentLoaded', () => {
  duplicateContent('top-skills');
  duplicateContent('bottom-skills');
});
