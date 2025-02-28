import NotFound from '@/pages/not-found';
import { Auth } from '@/pages/auth';

function router() {
  const path = location.pathname;

  switch (path) {
    // case '/':
    //   const auth = new Auth('#app');
    //   auth.render();
    //   break;
    case '/':
      const signup = new Auth('#app', { title: '회원가입', type: 'signup' });
      signup.render();
      break;
    default:
      const notFound = new NotFound('#app');
      notFound.render();
      break;
  }
}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);
