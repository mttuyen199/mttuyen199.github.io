document.getElementById('year').textContent = new Date().getFullYear();

const printBtn = document.getElementById('print-btn');
if (printBtn) {
  printBtn.addEventListener('click', () => window.print());
}
