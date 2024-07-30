const config = {
  type: Phaser.AUTO,
  width: 256,
  height: 244,
  backgroundColor: '#049cd8',
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
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
   'mistery','assets/blocks/underground/misteryBlock.png' 
  )
  this.load.image(
    'floorbicks',
    'assets/scenery/overworld/floorbricks.png'

  )
  this.load.spritesheet(
    'mario',
    'assets/entities/mario.png',
    { frameWidth: 18, frameHeight: 16 }
  )
  this.load.audio('hurry-up-theme', 'assets/sound/music/overworld/hurry-up-theme.mp3')
  this.load.audio('gameover', 'assets/sound/music/gameover.mp3')
}//1

function create() {
  this.add.image(20, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15)

  this.add.image(100, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15)

  this.add.image(180, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15)
  this.add.image(100, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15)

  this.floor = this.physics.add.staticGroup()

    this.add.image(230,140,'mistery')
  this.floor
    .create(0, config.height - 16, 'floorbicks')
    .setOrigin(0, 0.5)
    .refreshBody()
  this.floor
    .create(180, config.height - 16, 'floorbicks')
    .setOrigin(0, 0.5)
    .refreshBody()
  this.floor
    .create(390, config.height - 16, 'floorbicks')
    .setOrigin(0, 0.5)
    .refreshBody()

  this.floor
    .create(590, config.height - 16, 'floorbicks')
    .setOrigin(0, 0.5)
    .refreshBody()



  this.mario = this.physics.add.sprite(3, 210, 'mario')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setGravityY(-300)

  this.physics.world.setBounds(0, 0, 2000, config.height)
  this.physics.add.collider(this.mario, this.floor)
  this.cameras.main.setBounds(0, 0, 2000, config.height)
  this.cameras.main.startFollow(this.mario)
  this.anims.create({
    key: 'mario-walk',
    frames: this.anims.generateFrameNumbers(
      'mario',
      { start: 1, end: 3 }
    ),
    frameRate: 12,
    repeat: -1
  })
  this.anims.create({
    key: 'mario-idle',
    frames: [{ key: 'mario', frame: 0 }]
  })

  this.anims.create({
    key: 'mario-dead',
    frames: [{ key: 'mario', frame: 4 }]
  })

  this.anims.create({
    key: 'mario-jump',
    frames: [{ key: 'mario', frame: 5 }]
  })

  this.keys = this.input.keyboard.createCursorKeys()

}//2

function update() {
  if (this.mario.isDead) return
   if (this.keys.up.isDown && this.mario.body.touching.down) {
    this.mario.anims.play('mario-jump', true)
    this.mario.setVelocityY(300);
  }
  else if (this.keys.left.isDown) {
    this.mario.anims.play('mario-walk', true);
    this.mario.x -= 2;
    this.mario.flipX = true
  } else if (this.keys.right.isDown) {
    this.mario.anims.play('mario-walk', true);
    this.mario.x += 2;
    this.mario.flipX = false

  } else {
    // Si no se presiona ninguna tecla, detén la animación
    this.mario.anims.play('mario-idle', true);
  }

  if (this.mario.y >= config.height) {
    this.mario.isDead = true
    this.mario.anims.play('mario-dead')
    this.mario.setCollideWorldBounds(false)
    this.sound.play('gameover')
    this.sound.add('gameover', { volume: 0.1 }).play()

    setTimeout(() => {
      this.mario.setVelocityY(-350)
    }, 100)


    setTimeout(() => {
      this.scene.restart()
    }, 2000)
  }
} 
