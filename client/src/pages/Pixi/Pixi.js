import { useReducer, useEffect, useState, useRef, useCallback } from 'react';
import ShowListings from '../../components/ShowListings';
import moshiMon from './Assets/Images/moshi_monster.png';
import './Assets/Styles/pixiStyles.css';
import { createRoot } from 'react-dom/client';
import { Sprite, Stage } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
//   resizeTo: window,
  backgroundColor: 0x5bba6f,
});


function Pixi() {
    const ref = useRef(null);
    //add a sprite to the stage
    //   const [sprite, setSprite] = useState(null);
    
    //add png element to canvas
    useEffect(() => {
    //   PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    const sprite = PIXI.Sprite.from(moshiMon);
    sprite.anchor.set(0.5);
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;
    sprite.width = 100;
    sprite.height = 100;
    app.stage.addChild(sprite);
    // setSprite(sprite);
  }, []);

  useEffect(
    () => {
      // On first render add app to DOM
      ref.current.appendChild(app.view);
      // Start the PixiJS app
      app.start();

      return () => {
        // On unload stop the application
        console.log('unmounting');
        app.stop();
      };
    },
    window.addEventListener('resize', () => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
    })
  );

  return <div ref={ref} />;
}

export default Pixi;
