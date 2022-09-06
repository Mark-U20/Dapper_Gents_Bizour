import { useReducer, useEffect, useState, useRef, useCallback } from 'react';
// import moshiMon from './Assets/Images/moshi_monster.png';
// import './Assets/Styles/pixiStyles.css';
import { createRoot } from 'react-dom/client';
import { Sprite, Stage } from 'react-pixi-fiber';
// import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
//   width: window.innerWidth,
//   height: window.innerHeight,
  backgroundColor: 0x5bba6f,
  resizeTo: window,
  resolution: window.devicePixelRatio || 1
});

const sprite = PIXI.Sprite.from('./assets/images/player.png')

sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

// const container = new PIXI.Container();

// container.x = app.screen.width / 2;
// container.y = app.screen.height / 2;

// document.querySelector('#pixi-body').appendChild(app.view);

function Pixi() {

    const ref = useRef();

  useEffect(() => {
    // On first render add app to DOM
    ref.current.appendChild(app.view);
    // Start the PixiJS app
    app.start();
    // app.appendChild(sprite);

    // return () => {
    //   // On unload stop the application
    //   app.stop();
    // };
  }, []);


  return <div id="pixi-main" ref={ref} />;
    
    // const container = document.querySelector('#pixi-body');
    // const root = createRoot(container);
    

    // PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

    // const ref = useRef(null);

    // useEffect(() => {
    //   // On first render add app to DOM
    //   ref.current.appendChild(app.view);
    //   // Start the PixiJS app
    //   app.start();
  
    //   return () => {
    //     // On unload stop the application
    //     app.stop();
    //   };
    // }, []);
  
    // return <div ref={ref} />;

    // return (
    //     <main id="pixi-body">

    //     </main>
    // )

    // root.render(
    //     <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
    //       {/* <Bunny x={200} y={200} /> */}
    //     </Stage>,
    // )
}

export default Pixi;