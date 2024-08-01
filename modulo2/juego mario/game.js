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
    'mistery', 'assets/blocks/underground/misteryBlock.png'
  )
  this.load.image(
    'floorbicks',
    'assets/scenery/overworld/floorbricks.png'

  )

  this.load.image(
    'bush', 'assets/scenery/overworld/bush2.png'
  )

  this.load.image(
    'castle', 'assets/scenery/castle.png'
  )
  this.load.spritesheet(
    'goomba',
    'assets/entities/overworld/goomba.png',
    { frameWidth: 16, frameHeight: 14 }
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
  this.add.image(260, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15)


  this.add.image(360, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15)


  this.add.image(460, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15)

  this.add.image(560, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15)


  this.add.image(670, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15)
  this.floor = this.physics.add.staticGroup()

  this.add.image(250, 140, 'mistery')
  this.add.image(450, 140, 'mistery')
  this.add.image(650, 140, 'mistery')
  this.add.image(850, 140, 'mistery')

  this.add.image(250, 195, 'bush')
  this.add.image(450, 195, 'bush')
  this.add.image(650, 195, 'bush')
  this.add.image(850, 195, 'castle')



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
    this.floor
    .create(780, config.height - 16, 'floorbicks')
    .setOrigin(0, 0.5)
    .refreshBody()
  this.goomba = this.physics.add.sprite(240, 210, 'goomba')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setGravityY(500)
  
  this.goomba1 =this.physics.add.sprite(440, 210, 'goomba')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setGravityY(500)

  this.goomba2 = this.physics.add.sprite(640, 210, 'goomba')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setGravityY(500)
  this.mario = this.physics.add.sprite(3, 210, 'mario')
    .setOrigin(0, 1)
    .setCollideWorldBounds(true)
    .setGravityY(500)

  this.physics.world.setBounds(0, 0, 2000, config.height)
  this.physics.add.collider(this.goomba, this.floor)
  this.physics.add.collider(this.goomba1, this.floor)
  this.physics.add.collider(this.goomba2, this.floor)


  this.physics.add.collider(this.mario, this.floor)
  this.cameras.main.setBounds(0, 0, 2000, config.height)
  this.cameras.main.startFollow(this.mario)

  this.anims.create({
    key: 'gumball-walk',
    frames: this.anims.generateFrameNumbers(
      'mario',
      { start: 1, end: 3 }
    ),
    frameRate: 12,
    repeat: -1
  })


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
    frames: this.anims.generateFrameNumbers(
      'mario',
      { start: 5, end: 5 }
    ),
    frameRate: 12,
    repeat: -1
  })

  this.keys = this.input.keyboard.createCursorKeys()



}//2

let isJump = false;

function update() {

  if (this.mario.isDead) return
  if (this.keys.up.isDown && this.mario.body.touching.down) {
    isJump = true;
    this.mario.anims.play('mario-jump', true)
    this.mario.setVelocityY(-300);
    setTimeout(() => {
      isJump = false;
    }, 700)
  }
  else if (this.keys.left.isDown) {
    !isJump && this.mario.anims.play('mario-walk', true);
    this.mario.x -= 2;
    this.mario.flipX = true
  } else if (this.keys.right.isDown) {
    !isJump && this.mario.anims.play('mario-walk', true);
    this.mario.x += 2;
    this.mario.flipX = false

  } else {
    // Si no se presiona ninguna tecla, detén la animación
    if (!isJump) {
      this.mario.anims.play('mario-idle');
    }
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
