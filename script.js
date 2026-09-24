(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.textContent = open ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '☰';
    }));
  }

  document.querySelectorAll('[data-product]').forEach(link => {
    link.addEventListener('click', () => {
      const field = document.querySelector('#product');
      if(field){ field.value = link.dataset.product || ''; }
    });
  });

  const form = document.querySelector('#quote-form');
  const status = document.querySelector('#form-status');
  if(form){
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const fd = new FormData(form);
      const subject = `Inquiry - ${fd.get('product') || 'Composite Materials'}`;
      const body = [
        `Name: ${fd.get('name') || ''}`,
        `Company: ${fd.get('company') || ''}`,
        `Email: ${fd.get('email') || ''}`,
        `WhatsApp: ${fd.get('whatsapp') || ''}`,
        `Product / Material: ${fd.get('product') || ''}`,
        `Application: ${fd.get('application') || ''}`,
        `Process: ${fd.get('process') || ''}`,
        `Estimated Quantity: ${fd.get('quantity') || ''}`,
        `Specification / Requirement: ${fd.get('message') || ''}`
      ].join('\n');
      const url = `mailto:bohao1358@frpgd.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
      if(status){ status.textContent = 'Your email app should open with the inquiry details prepared.'; }
    });
  }

  const year = document.querySelector('#year');
  if(year){ year.textContent = new Date().getFullYear(); }
})();
