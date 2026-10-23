'use strict';
const copyButton = document.querySelector('#copy-phone');
const status = document.querySelector('#copy-status');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('638 578 560');
    status.textContent = 'Teléfono copiado: 638 578 560';
  } catch {
    document.querySelector('#manual-copy').hidden = false;
    const field = document.querySelector('#phone-value');
    field.focus(); field.select();
    status.textContent = 'Selecciona el número y cópialo manualmente.';
  }
});
document.querySelectorAll('[data-group]').forEach(link => {
  link.addEventListener('click', () => {
    const note = document.querySelector('#group-note');
    const labels = { amigos: '¿Venís con amigos? Prepara la fecha y el número de participantes para la consulta.', despedida: '¿Organizáis una despedida? Comenta la fecha y el tamaño del grupo al llamar.', empresa: '¿Venís con la empresa? Consulta la propuesta de grupo y las condiciones actuales.' };
    note.textContent = labels[link.dataset.group]; note.hidden = false;
  });
});
// Observers enhance navigation and motion, never image visibility.
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.sideline nav a')];
  const zones = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -35% 0px', threshold: 0 });
  links.forEach(link => zones.observe(document.querySelector(link.hash)));
  const comment = document.querySelector('.scene-comment');
  const motion = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      comment.classList.add('is-in-view');
      motion.disconnect();
    }
  }, { threshold: .5 });
  motion.observe(comment);
}
