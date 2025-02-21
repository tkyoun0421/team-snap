import Auth from '@pages/auth';
import NotFound from '@pages/not-found';

function router() {
  const path = location.hash;
  console.log(path);

  switch (path) {
    case './':
      const auth = new Auth('#app');
      auth.render();
    default:
      const pageNotFound = new NotFound('#app');
      pageNotFound.render();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
