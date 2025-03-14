import SignUpView from '@/views/auth/signup.view';

function router() {
  const path = location.pathname;

  switch (path) {
    case '/':
      const view = new SignUpView('#app');
      view.render();
      break;
    default:
      break;
  }
}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);
