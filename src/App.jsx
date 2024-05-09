import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './router/routes.js';
import { OrientationSetter } from './components/Home/Orientation.jsx';
import { AudioHandler } from './components/AudioHandler.jsx';
import { GoToBack } from './components/Home/GoToBack.jsx';
import { SoundProvider } from './context/SoundContext.jsx';
import { Animation } from './components/Home/Animation.jsx';
import { RenderProvider } from './context/RenderContext.jsx';

const App = () => {
  return (
    <div className="main">
      <SoundProvider>
        <RenderProvider>
          <BrowserRouter>
            <GoToBack />
            <Animation />
            <OrientationSetter />
            <AudioHandler />
            <Routes>
              {ROUTES.map((route, index) => (
                <Route path={route.path} element={route.element} key={index} />
              ))}
            </Routes>
          </BrowserRouter>
        </RenderProvider>
      </SoundProvider>
    </div>
  );
};

export default App;
