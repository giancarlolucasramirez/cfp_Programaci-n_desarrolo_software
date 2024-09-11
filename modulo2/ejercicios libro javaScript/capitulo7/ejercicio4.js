class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
  
    static random(parcelCount = 5) {
      let parcels = [];
      for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
          place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
      }
      return new VillageState("Post Office", parcels);
    }
  }
  
  const roadGraph = {
    "Alice's House": ["Bob's House", "Cabin", "Post Office"],
    "Bob's House": ["Alice's House", "Town Hall"],
    "Cabin": ["Alice's House"],
    "Post Office": ["Alice's House", "Marketplace"],
    "Marketplace": ["Post Office", "Farm"],
    "Farm": ["Marketplace", "Greengrocer"],
    "Greengrocer": ["Farm", "Shop"],
    "Shop": ["Greengrocer", "Town Hall"],
    "Town Hall": ["Bob's House", "Shop"]
  };
  
  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  
  function robot1(state, memory) {
    return {direction: randomPick(roadGraph[state.place]), memory};
  }
  
  function robot2(state, memory) {
    return {direction: randomPick(roadGraph[state.place]), memory};
  }
  
  function compareRobots(robot1, memory1, robot2, memory2) {
    function runRobot(state, robot, memory) {
      for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
          return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
      }
    }
  
    let totalSteps1 = 0, totalSteps2 = 0;
    for (let i = 0; i < 100; i++) {
      let task = VillageState.random();
      totalSteps1 += runRobot(task, robot1, memory1);
      totalSteps2 += runRobot(task, robot2, memory2);
    }
  
    return {
      robot1Average: totalSteps1 / 100,
      robot2Average: totalSteps2 / 100
    };
  }
  
  let resultados = compareRobots(robot1, [], robot2, []);
  console.log(`Robot 1 promedio de pasos por tarea: ${resultados.robot1Average}`);
  console.log(`Robot 2 promedio de pasos por tarea: ${resultados.robot2Average}`);
  