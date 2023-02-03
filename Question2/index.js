class Stack {
    constructor() {
      this.stack = [];
    }
  
    find(conditon) {
      return this.stack.find(conditon);
    }
    push(item) {
      return this.stack.push(item);
    }
  
    pop() {
      return this.stack.pop();
    }
  
    size() {
      return this.stack.length;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  }
  