import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './router/routes.js';
import { OrientationSetter } from './components/Home/Orientation.jsx';
import { AudioHandler } from './components/AudioHandler.jsx';
import { SoundProvider } from './context/SoundContext.jsx';

const App = () => {
  return (
    <div className="main">
      <SoundProvider>
        <OrientationSetter />
        <AudioHandler />
        <BrowserRouter>
          <Routes>
            {ROUTES.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))}
          </Routes>
        </BrowserRouter>
      </SoundProvider>
    </div>
  );
};

export default App;
