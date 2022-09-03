import { useReducer, useEffect, useState, useRef, useCallback } from 'react';
import ShowListings from '../../components/ShowListings';
import moshiMon from './Assets/Images/moshi_monster.png';
import './Assets/Styles/pixiStyles.css';
import { createRoot } from 'react-dom/client';
import { Sprite, Stage } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x5bba6f,
});

function Pixi() {
  const ref = useRef(null);

  useEffect(() => {
    // On first render add app to DOM
    ref.current.appendChild(app.view);
    // Start the PixiJS app
    app.start();

    return () => {
      // On unload stop the application
      app.stop();
    };
  }, []);

  return <div ref={ref} />;

  // try {
  //   function Bunny(props) {
  //     return <Sprite texture={PIXI.Texture.from(moshiMon)} {...props} />;
  //   }
  //   const container = document.getElementById('container');
  //   const root = createRoot(container);
  //   root.render(
  //     <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
  //       <Bunny x={200} y={200} />
  //     </Stage>
  //   );
  // } catch {
  //   console.log('lol');
  // }
}

export default Pixi;
