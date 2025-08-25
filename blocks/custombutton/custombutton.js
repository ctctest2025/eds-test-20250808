export default function decorate(block) {
  const pdfUrl = block.dataset.pdfUrl || 'https://example.com/sample.pdf';
  const label = block.dataset.label || 'Button';

  const button = document.createElement('button');
  button.className = 'custombutton';
  button.textContent = label;

  button.addEventListener('click', () => {
    window.open(pdfUrl, '_blank');
  });

  block.append(button);
}
