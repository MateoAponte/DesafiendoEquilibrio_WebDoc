import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './router/routes.js';
import { OrientationSetter } from './components/Home/Orientation.jsx';
import { AudioHandler } from './components/AudioHandler.jsx';
import { GoToBack } from './components/Home/GoToBack.jsx';
import { MaskHandler } from './components/Home/MaskHandler.jsx';
import { SoundProvider } from './context/SoundContext.jsx';
import { Animation } from './components/Home/Animation.jsx';
import { RenderProvider } from './context/RenderContext.jsx';
import ICON from '../src/assets/img/icons/basketball.ico';
import { Helmet } from 'react-helmet';
import { AudioBoolean } from './components/Home/AudioBoolean';

const App = () => {
  return (
    <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Desafiando el Equilibrio</title>
        <meta name="description" content="Documental Web interactivo" />
        <link rel="icon" type="image/png" href={ICON} sizes="16x16" data-react-helmet="true" />
      </Helmet>
      <SoundProvider>
        <RenderProvider>
          <BrowserRouter>
            <AudioBoolean />

            <MaskHandler />
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
