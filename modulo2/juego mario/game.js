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
};

new Phaser.Game(config);

function preload() {
  this.load.image('cloud1', 'assets/scenery/overworld/cloud1.png');
  this.load.image('mistery', 'assets/blocks/underground/misteryBlock.png');
  this.load.image('floorbicks', 'assets/scenery/overworld/floorbricks.png');
  this.load.image('bush', 'assets/scenery/overworld/bush2.png');
  this.load.image('castle', 'assets/scenery/castle.png');
  this.load.spritesheet('goomba', 'assets/entities/overworld/goomba.png', { frameWidth: 16, frameHeight: 16 });
  this.load.spritesheet('coin', 'assets/collectibles/coin.png', { frameWidth: 16, frameHeight: 16 });
  this.load.spritesheet('mario', 'assets/entities/mario.png', { frameWidth: 18, frameHeight: 16 });
  this.load.audio('goomba-stomp', 'assets/sound/effects/goomba-stomp.wav');
  this.load.audio('hurry-up-theme', 'assets/sound/music/overworld/hurry-up-theme.mp3');
  this.load.audio('gameover', 'assets/sound/music/gameover.mp3');
  this.load.audio('coin', 'assets/sound/effects/coin.mp3');
  this.load.audio('hongo', 'assets/sound/effects/consume-powerup.mp3');

  this.load.image('mushroom', 'assets/collectibles/super-mushroom.png'); // Carga del hongo
}

function create() {
  this.add.image(20, 50, 'cloud1').setOrigin(0, 0).setScale(0.15);
  this.add.image(100, 50, 'cloud1').setOrigin(0, 0).setScale(0.15);
  this.add.image(180, 50, 'cloud1').setOrigin(0, 0).setScale(0.15);
  this.add.image(260, 50, 'cloud1').setOrigin(0, 0).setScale(0.15);
  this.add.image(360, 50, 'cloud1').setOrigin(0, 0).setScale(0.15);
  this.add.image(460, 50, 'cloud1').setOrigin(0, 0).setScale(0.15);
  this.add.image(560, 50, 'cloud1').setOrigin(0, 0).setScale(0.15);
  this.add.image(670, 50, 'cloud1').setOrigin(0, 0).setScale(0.15);

  this.floor = this.physics.add.staticGroup();

  this.add.image(250, 140, 'mistery');
  this.add.image(450, 140, 'mistery');
  this.add.image(650, 140, 'mistery');
  this.add.image(850, 140, 'mistery');

  this.add.image(250, 195, 'bush');
  this.add.image(450, 195, 'bush');
  this.add.image(650, 195, 'bush');
  this.add.image(850, 195, 'castle');

  this.floor.create(0, config.height - 16, 'floorbicks').setOrigin(0, 0.5).refreshBody();
  this.floor.create(180, config.height - 16, 'floorbicks').setOrigin(0, 0.5).refreshBody();
  this.floor.create(390, config.height - 16, 'floorbicks').setOrigin(0, 0.5).refreshBody();
  this.floor.create(590, config.height - 16, 'floorbicks').setOrigin(0, 0.5).refreshBody();
  this.floor.create(780, config.height - 16, 'floorbicks').setOrigin(0, 0.5).refreshBody();

  this.enemy = this.physics.add.sprite(120, 210, 'goomba').setOrigin(0, 1).setGravityY(300).setVelocityX(-50);

  this.mario = this.physics.add.sprite(3, 210, 'mario').setOrigin(0, 1).setCollideWorldBounds(true).setGravityY(500);

  this.physics.world.setBounds(0, 0, 2000, config.height);
  this.physics.add.collider(this.mario, this.floor);
  this.physics.add.collider(this.enemy, this.floor);
  this.physics.add.collider(this.mario, this.enemy, onHitEnemy, null, this);

  this.cameras.main.setBounds(0, 0, 2000, config.height);
  this.cameras.main.startFollow(this.mario);

  function onHitEnemy(mario, enemy) {
    if (mario.body.touching.down && enemy.body.touching.up) {
      if (!enemy.isDead) {
        enemy.isDead = true; // Marcar el Goomba como muerto
        enemy.anims.play('goomba-Dead', true);
        enemy.body.setVelocity(0, 0); // Detener el movimiento del Goomba
        enemy.body.allowGravity = false; // Desactivar la gravedad para el Goomba
        mario.setVelocityY(-200);
        this.sound.play('goomba-stomp');
        this.time.delayedCall(500, () => { // Tiempo para reproducir la animación
          enemy.disableBody(true, true);
        }, [], this);
      }
    } else {
      this.mario.isDead = true;
      this.mario.anims.play('mario-dead');
      this.mario.setCollideWorldBounds(false);
      this.mario.body.setVelocity(0, 0); // Detener el movimiento de Mario
      this.sound.play('gameover');
      this.mario.body.checkCollision.none = true;

      setTimeout(() => {
        this.mario.setVelocityY(-300);
      }, 100);

      setTimeout(() => {
        this.scene.restart();
      }, 2000);
    }
  }

  this.anims.create({
    key: 'coin',
    frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 3 }),
    frameRate: 12,
    repeat: -1
  });

  this.coins = this.physics.add.staticGroup({
    key: 'coin',
    repeat: 3,
    setXY: { x: 150, y: 150, stepX: 200 }
  });

  this.coins.children.iterate(function (child) {
    child.anims.play('coin', true);
  });

  this.physics.add.overlap(this.mario, this.coins, collectCoin, null, this);

  function collectCoin(mario, coin) {
    coin.disableBody(true, true);
    this.sound.play('coin'); // Reproducir sonido al recolectar la moneda

    const scoreText = this.add.text(
      coin.x,
      coin.y,
      '100',
      {
        fontFamily: 'pixel',
        fontSize: config.width / 25
      }
    );

    this.tweens.add({
      targets: scoreText,
      duration: 500,
      y: scoreText.y - 20
    });
  }

  // Creación de los hongos
  this.mushrooms = this.physics.add.staticGroup({
    key: 'mushroom',
    repeat: 2,
    setXY: { x: 300, y: config.height - 32, stepX: 400 }
  });

  this.mushrooms.children.iterate(function (child) {
    child.setOrigin(0, 1).refreshBody();
  });

  // Añadir la colisión entre Mario y los hongos
  this.physics.add.overlap(this.mario, this.mushrooms, collectMushroom, null, this);

  function collectMushroom(mario, mushroom) {
    mushroom.disableBody(true, true);
    this.sound.play('hongo'); // Puedes cambiar esto a otro sonido si tienes uno para los hongos

    // Aquí puedes agregar cualquier efecto que el hongo tenga sobre Mario, como hacerlo crecer
    mario.setScale(1.5); // Ejemplo de hacer a Mario más grande
  }     
  this.anims.create({
    key: 'gumball-walk',
    frames: this.anims.generateFrameNumbers('mario', { start: 1, end: 3 }),
    frameRate: 12,
    repeat: -1
  });

  this.anims.create({
    key: 'mario-walk',
    frames: this.anims.generateFrameNumbers('mario', { start: 1, end: 3 }),
    frameRate: 12,
    repeat: -1
  });

  this.anims.create({
    key: 'mario-idle',
    frames: [{ key: 'mario', frame: 0 }]
  });

  this.anims.create({
    key: 'mario-dead',
    frames: [{ key: 'mario', frame: 4 }]
  });

  this.anims.create({
    key: 'mario-jump',
    frames: this.anims.generateFrameNumbers('mario', { start: 5, end: 5 }),
    frameRate: 12,
    repeat: -1
  });

  this.keys = this.input.keyboard.createCursorKeys();

  this.anims.create({
    key: 'goomba-walk',
    frames: this.anims.generateFrameNumbers('goomba', { start: 0, end: 1 }),
    frameRate: 12,
    repeat: -1
  });
  this.enemy.anims.play('goomba-walk', true);

  this.anims.create({
    key: 'goomba-Dead',
    frames: this.anims.generateFrameNumbers('goomba', { start: 2, end: 2 }),
    frameRate: 12,
    repeat: -1
  });
}


let isJump = false;

function update() {
  if (this.mario.isDead) return;
  if (this.keys.up.isDown && this.mario.body.touching.down) {
    isJump = true;
    this.mario.anims.play('mario-jump', true);
    this.mario.setVelocityY(-300);
    setTimeout(() => {
      isJump = false;
    }, 700);
  } else if (this.keys.left.isDown) {
    !isJump && this.mario.anims.play('mario-walk', true);
    this.mario.x -= 2;
    this.mario.flipX = true;
  } else if (this.keys.right.isDown) {
    !isJump && this.mario.anims.play('mario-walk', true);
    this.mario.x += 2;
    this.mario.flipX = false;
  } else {
    if (!isJump) {
      this.mario.anims.play('mario-idle');
    }
  }

  if (this.mario.y >= config.height) {
    this.mario.isDead = true;
    this.mario.anims.play('mario-dead');
    this.mario.setCollideWorldBounds(false);
    this.sound.play('gameover');

    setTimeout(() => {
      this.mario.setVelocityY(-350);
    }, 100);

    setTimeout(() => {
      this.scene.restart();
    }, 2000);
  }
}