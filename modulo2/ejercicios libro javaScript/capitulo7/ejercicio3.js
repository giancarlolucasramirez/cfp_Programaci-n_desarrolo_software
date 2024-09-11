class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(member => member !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(iterable) {
      let group = new Group();
      for (let value of iterable) {
        group.add(value);
      }
      return group;
    }
  
    iterator() {
      let index = 0;
      let members = this.members;
      return {
        next() {
          if (index < members.length) {
            return { value: members[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  }
  
  // Ejemplo de uso:
  let group = Group.from([10, 20, 30]);
  let iterator = group.iterator();
  console.log(iterator.next()); // { value: 10, done: false }
  console.log(iterator.next()); // { value: 20, done: false }
  console.log(iterator.next()); // { value: 30, done: false }
  console.log(iterator.next()); // { done: true }
  