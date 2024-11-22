function duplicateContent(containerId, times) {
  const container = document.getElementById(containerId);
  const originalContent = container.querySelector('.marquee-content-inner');

  for (let i = 0; i < times; i++) {
    const clone = originalContent.cloneNode(true);
    container.appendChild(clone);
  }
}

// Дублируем контент после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
  duplicateContent('topMarquee', 3); // Создаст еще 3 копии для верхней строки
  duplicateContent('bottomMarquee', 3); // Создаст еще 3 копии для нижней строки
});
