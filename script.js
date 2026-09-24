const BOHAO_CONFIG = {
  email: 'bohao1358@frpgd.com',
  company: 'Guangdong Bohao Composites Co., Ltd.'
};

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('quote-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = `[Website Inquiry] ${data.get('product') || 'Composite Material Requirement'} - ${data.get('company') || 'New Customer'}`;
      const body = [
        `Name: ${data.get('name') || ''}`,
        `Company: ${data.get('company') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `WhatsApp: ${data.get('whatsapp') || ''}`,
        `Product / Material: ${data.get('product') || ''}`,
        `Application: ${data.get('application') || ''}`,
        `Process: ${data.get('process') || ''}`,
        `Estimated Quantity: ${data.get('quantity') || ''}`,
        '',
        'Specification / Requirement:',
        data.get('message') || ''
      ].join('\n');

      const mailto = `mailto:${BOHAO_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      if (status) status.textContent = 'Your email draft has been prepared. Please send it from your email app.';
    });
  }
});
