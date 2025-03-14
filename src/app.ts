import SignUpView from '@/views/auth/signup.view';

function router() {
  const path = location.pathname;

  switch (path) {
    case '/':
      new SignUpView('app');
      break;
    default:
      break;
  }
}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);
