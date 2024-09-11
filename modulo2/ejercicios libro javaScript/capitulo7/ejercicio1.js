class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  
  Vec.prototype.plus = function(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  };
  
  Vec.prototype.minus = function(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  };
  
  Object.defineProperty(Vec.prototype, 'length', {
    get: function() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  });
  
  const v1 = new Vec(6, 2);
  const v2 = new Vec(3, 4);
  const v3 = v1.plus(v2);
  const v4 = v1.minus(v2);
  
  console.log(v3.toString()); 
  console.log(v4.toString()); 
  console.log(v1.length);      
  

  