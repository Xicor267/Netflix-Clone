import './App.scss';
import { Login } from './layout/auth';
import { Footer } from './layout/page/footer/Footer';
import { LanguageProvider } from './locales/locale';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <img className="login-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/d18a0811-74a2-49ad-8c2f-0f2f53d54e67/VN-vi-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_86cd86cb-77eb-42a3-84be-6b90b5a5b143_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/d18a0811-74a2-49ad-8c2f-0f2f53d54e67/VN-vi-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_86cd86cb-77eb-42a3-84be-6b90b5a5b143_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/d18a0811-74a2-49ad-8c2f-0f2f53d54e67/VN-vi-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_86cd86cb-77eb-42a3-84be-6b90b5a5b143_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/d18a0811-74a2-49ad-8c2f-0f2f53d54e67/VN-vi-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_86cd86cb-77eb-42a3-84be-6b90b5a5b143_large.jpg 1800w"
        />
        <Login />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
