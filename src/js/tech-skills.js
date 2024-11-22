function duplicateContent(containerId, times) {
  const container = document.getElementById(containerId);
  const originalContent = container.querySelector('.skills__inner');

  for (let i = 0; i < times; i++) {
    const clone = originalContent.cloneNode(true);
    container.appendChild(clone);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  duplicateContent('top-skills', 3);
  duplicateContent('bottom-skills', 3);
});