import SignUp from '@/pages/auth/sign-up';
import NotFound from '@/pages/not-found';

function router() {
  const path = location.pathname;

  switch (path) {
    // case '/':
    //   const auth = new Auth('#app');
    //   auth.render();
    //   break;
    case '/':
      const signup = new SignUp('#app');
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
