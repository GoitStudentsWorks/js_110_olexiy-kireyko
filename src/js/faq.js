import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq__accordion-container', {
  openOnInit: [0],
  collapse: false,
  elementClass: 'faq__acc-item',
  triggerClass: 'faq__acc-trigger',
  panelClass: 'faq__acc-panel',
});
