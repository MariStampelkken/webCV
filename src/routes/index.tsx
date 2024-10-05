import { Routes, Route } from 'react-router-dom';
import Home from './home/Home.tsx';
import About from './about/About.tsx';
import Contact from './contact/Contact.tsx';
import CV from './cv/CV.tsx';

const RouterConfig = () => (
  <div data-testid="auth-wrapper">
    <div style={{ minHeight: '100vh' }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/CV" element={<CV />} />
        <Route
          path="*"
          element={<h1 style={{ textAlign: 'center' }}>404 Page Not Found</h1>}
        />
      </Routes>
    </div>
  </div>
);

export default RouterConfig;
