/*
Write a MinMaxStack class for a Min Max Stack. 
The class should support:
    • Pushing and popping values on and off the stack.
    • Peeking at the value at the top of the stack.
    • Getting both the minimum and the maximum values in the stack at any given point in time.
All class methods, when considered independently, should run in constant time and with constant space.
*/
// Attempt taking space time complexity into mind.
class MinMaxStack {
  min = [Infinity];
  max = [-Infinity];
  numbers = [];
  peek() {
    // Write your code here.
    return this.numbers[this.numbers.length - 1];
  }

  pop() {
    // Write your code here.
    const popped = this.numbers.pop();
    if (this.max[this.max.length - 1] === popped) this.max.pop();
    if (this.min[this.min.length - 1] === popped) this.min.pop();
    return popped;
  }

  push(number) {
    // Write your code here.
    if (this.max[this.max.length - 1] <= number) this.max.push(number);
    if (this.min[this.min.length - 1] >= number) this.min.push(number);
    this.numbers.push(number);
  }

  getMin() {
    // Write your code here.
    return this.min[this.min.length - 1];
  }

  getMax() {
    // Write your code here.
    return this.max[this.max.length - 1];
  }
}

// First attempt without space time complexity.
class MinMaxStackUnoptimal {
  numbers = [];
  peek() {
    return this.numbers[this.numbers.length - 1];
  }

  pop() {
    return this.numbers.pop();
  }

  push(number) {
    this.numbers.push(number);
  }

  getMin() {
    return Math.min(...this.numbers);
  }

  getMax() {
    return Math.max(...this.numbers);
  }
}
