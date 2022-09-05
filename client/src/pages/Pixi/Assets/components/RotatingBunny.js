import { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from 'react-pixi-fiber';
import Bunny from './Bunny';

// http://pixijs.io/examples/#/basics/basic.js
function RotatingBunny({ ...props }) {
  const [rotation, setRotation] = useState(0);
  const app = useContext(AppContext);

  const animate = useCallback((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent tranformation
    setRotation((rotation) => rotation + 0.1 * delta);
  }, []);

  useEffect(() => {
    app.ticker.add(animate);

    return () => {
      app.ticker.remove(animate);
    };
  }, [app.ticker, animate]);

  return <Bunny {...props} rotation={rotation} />;
}

export default RotatingBunny;
