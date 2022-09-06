import * as React from 'react';
import { Sprite } from 'react-pixi-fiber';
// import * as PIXI from 'pixi.js';

const bunny = 'https://i.imgur.com/IaUrttj.png';
const centerAnchor = new PIXI.Point(0.5, 0.5);

function Bunny() {
  return <Sprite anchor={centerAnchor} texture={PIXI.Texture.from(bunny)} />;
}

export default Bunny;
