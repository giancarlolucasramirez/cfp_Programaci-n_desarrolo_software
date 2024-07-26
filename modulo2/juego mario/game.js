const config = {
  type: Phaser.AUTO,
  width: 256,
  height: 244,
  backgroundColor: '#049cd8',
  parent: 'game',
  physics:{
   default: 'arcade', 
    arcade: {
      gravity: {y:300},
      debug: false
    }
  },
  scene: {
    preload,
    create,
    update
  }
}

new Phaser.Game(config)

function preload() {
  this.load.image(
    'cloud1',
    'assets/scenery/overworld/cloud1.png'
  
  )
  this.load.image(
    'floorbicks',
    'assets/scenery/overworld/floorbricks.png'
  
  )
  this.load.spritesheet(
    'mario',
    'assets/entities/mario.png',
    {frameWidth:18,frameHeight: 16}
  )

  
}//1

function create() {
  this.add.image(100, 50, 'cloud1')
   .setOrigin(0,0)
    .setScale(0.15)
 this.floor = this.physics.add.staticGroup()
  this.floor
    .create(0,config.height -32 , 'floorbicks')
    .setOrigin(0,0)

  this.floor
    .create(100,config.height -32 , 'floorbicks')
    .setOrigin(0,0)
    
  this.add.tileSprite(0, config.height -32, config.width,32,
    'floorbicks' )
    .setOrigin(0,0)

  this.mario = this.physics.add.sprite(3,210, 'mario')
  .setOrigin(0,1)
  
  this.anims.create({
    key: 'mario-walk',
    frames: this.anims.generateFrameNumbers(
      'mario',
      {start: 1, end:3}
    ),
    frameRate:12,
    repeat: -1
  })
  this.anims.create({
    key: 'mario-idle',
    frames: [{key: 'mario', frame:0}]
  })
  this.anims.create({
    key: 'mario-jump',
    frames: [{key: 'mario', frame:5}]
  })
  
  this.keys = this.input.keyboard.createCursorKeys()

}//2

function update() {
  if (this.keys.left.isDown) {
    this.mario.anims.play('mario-walk', true);
    this.mario.x -= 2;
    this.mario.flipX = true
  } else if (this.keys.right.isDown) {
    this.mario.anims.play('mario-walk', true);
    this.mario.x += 2;
    this.mario.flipX = false

  }else if (this.keys.up.isDown){
    this.mario.y -= 5;

  }
  
   else {
    // Si no se presiona ninguna tecla, detén la animación
    this.mario.anims.play('mario-idle', true);
  }
} 
