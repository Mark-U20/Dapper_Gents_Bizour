import { useCallback, useEffect, useRef, useState } from 'react';
// import * as PIXI from 'pixi.js';
import { Stage, Text, Container } from 'react-pixi-fiber';
import AnimatedSprite from './Assets/components/AnimatedSprite';
import RotatingBunny from './Assets/components/RotatingBunny';

const width = 600;
const height = 400;
const options = {
  backgroundColor: 0x56789a,
  resolution: window.devicePixelRatio,
  width: width,
  height: height,
};
const style = {
  width: width,
  height: height,
};

function Canvas() {
  // console.log('test');
  const [textures, setTextures] = useState([]);
  const [filters, setFilters] = useState([]);
  const animationRef = useRef(null);

  useEffect(() => {
    // based on https://pixijs.io/examples/#/sprite/animatedsprite-jet.js

    function onAssetsLoaded() {
      const frames = [];

      for (let i = 0; i < 30; i++) {
        const val = i < 10 ? `0${i}` : i;

        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(PIXI.Texture.from(`rollSequence00${val}.png`));
      }

      setTextures(frames);
    }

    //
    if (!PIXI.Loader.shared.resources['fighter.json']) {
      PIXI.Loader.shared
        .add('fighter.json', { crossOrigin: 'anonymous' })
        .load(onAssetsLoaded);
      setFilters([new PIXI.filters.BlurFilter()]);
    } else {
      onAssetsLoaded();
      setFilters([new PIXI.filters.BlurFilter()]);
    }
  }, []);

  const toggleAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.playing
        ? animationRef.current.stop()
        : animationRef.current.play();
    }
  }, []);

  if (textures.length === 0) {
    return 'loading assets..';
  }

  return (
    <Stage options={options} style={style}>
      <Container filters={filters}>
        <Text x={100} y={100} text="Click to animate!" />
        <RotatingBunny position="50,50" />
        {/* <AnimatedSprite
          ref={animationRef}
          position="300,75"
          textures={textures}
          interactive={true}
          pointerdown={toggleAnimation}
        /> */}
      </Container>
    </Stage>
  );
}

export default Canvas;
