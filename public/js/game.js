'use strict'

// set canvas width to window resolution
const screenSizeX = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const screenSizeY = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

const config = {
  type: Phaser.AUTO,
  width: screenSizeX,
  height: screenSizeY,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);

function preload() {
  this.load.image('sky', '/assets/sky.png');
  this.load.image('ground', '/assets/platform.png');
  this.load.image('star', '/assets/star.png');
  this.load.image('bomb', '/assets/bomb.png');
  this.load.spritesheet('dude', '/assets/dude/png',
    {
      frameWidth: 32,
      frameHeight: 48
    }
  );
}

let platforms;

function create() {
  this.add.tileSprite(screenSizeX / 2, screenSizeY / 2, screenSizeX, screenSizeY, 'sky');

  this.add.tileSprite(screenSizeX / 2, screenSizeY - 20, screenSizeY + 30, 20, 'ground').setScale(2);

  platforms = this.physics.add.staticGroup();

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
}

function update() {}
