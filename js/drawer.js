const drawerHeaders = document.querySelectorAll('.drawer-header');

drawerHeaders.forEach(drawerHeader => {
  drawerHeader.addEventListener('click', () => {
    const drawer = drawerHeader.closest('.drawer'); // find parent .drawer
    drawer.classList.toggle('open');
  });
});