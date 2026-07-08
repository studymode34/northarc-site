// mobile nav
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (btn && nav) {
  const closeNav = () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(event.target) || btn.contains(event.target)) return;
    closeNav();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });
}

// scroll reveal (respects reduced motion via CSS)
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// structured brief -> prefilled email
document.querySelectorAll('[data-brief-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const inbox = form.getAttribute('data-email') || 'hello@wakeupandwork.dev';
    const values = Object.fromEntries(data.entries());
    const subject = `Project brief: ${values.company || 'New inquiry'} (${values.lane || 'General'})`;
    const body = [
      `Name: ${values.name || ''}`,
      `Email: ${values.email || ''}`,
      `Company/Product: ${values.company || ''}`,
      `Project lane: ${values.lane || ''}`,
      `Timeline: ${values.timeline || ''}`,
      `Budget range: ${values.budget || ''}`,
      '',
      'What are you trying to build?',
      values.summary || '',
      '',
      'Existing stack or links',
      values.stack || ''
    ].join('\n');

    window.location.href = `mailto:${inbox}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
