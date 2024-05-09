import { createContext, useEffect, useState } from 'react';

const RenderContext = createContext();

const RenderProvider = ({ children }) => {
  const [renderCounter, setRenderCounter] = useState(0);

  const changeRenderCounter = (newUrl) => setRenderCounter(newUrl);

  return (
    <RenderContext.Provider
      value={{
        renderCounter,
        changeRenderCounter,
      }}>
      {children}
    </RenderContext.Provider>
  );
};

export { RenderProvider, RenderContext };
