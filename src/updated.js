class Component {
  constructor() {
    this.state = { number: 0 }
    this.batchQueue = [];
    this.batchCallback = [];
    this.batchUpdate = false;
  }

  flushQueue() {
    this.state = this.batchQueue.reduce((acc, cur) => {
      return cur(acc);
    }, this.state);
    
    this.batchCallback.forEach(callback => callback());
  }

  setState(newState, callback) {
    if(this.batchUpdate) {
      this.batchQueue.push(newState);
      if(typeof callback !== 'undefined') {
        this.batchCallback.push(callback);
      }
    }
  }

  add() {
    this.batchUpdate = true;
    this.setState(previousState => ({number: previousState.number + 1}), () => {
      console.log(this.state);
      console.log(this.state, '可以获得所有的dom的内容')
    });
    this.setState(previousState => ({number: previousState.number + 1}));
    this.flushQueue();
  }
}

let c = new Component();
c.add();