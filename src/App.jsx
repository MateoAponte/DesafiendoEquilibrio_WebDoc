import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './router/routes.js';
import { OrientationSetter } from './components/Home/Orientation.jsx';

const App = () => {
  return (
    <div className="main">
      <OrientationSetter />
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
