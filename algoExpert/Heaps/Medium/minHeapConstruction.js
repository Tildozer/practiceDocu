/*
Implement a MinHeap class that supports:
• Building a Min Heap from an input array of integers.
• Inserting integers in the heap.
• Removing the heap's minimum / root value.
• Peeking at the heap's minimum / root value.
• Sifting integers up and down the heap, which is to be used when inserting and removing values.
Note that the heap should be represented in the form of an array.
*/

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
    let firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let i = firstParentIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }

    return array;
  }

  siftDown(currIdx, endIdx, heap) {
    // Write your code here.
    let childOneIdx = currIdx * 2 + 1;
    let idxToSwap;
    while (childOneIdx <= endIdx) {
      let childTwoIdx = currIdx * 2 + 2 <= endIdx ? currIdx * 2 + 2 : -1;
      if (childTwoIdx !== -1 && heap[childOneIdx] > heap[childTwoIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[currIdx]) {
        this.swap(currIdx, idxToSwap, heap);
        currIdx = idxToSwap;
        childOneIdx = currIdx * 2 + 1;
      } else {
        break;
      }
    }
  }

  siftUp(currIdx, heap) {
    // Write your code here.
    let parentIdx = Math.floor((currIdx - 1) / 2);
    while (currIdx > 0 && heap[currIdx] < heap[parentIdx]) {
      this.swap(currIdx, parentIdx, heap);
      currIdx = parentIdx;
      parentIdx = Math.floor((currIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
    // Write your code here.
  }

  remove() {
    // Write your code here.
    this.swap(0, this.heap.length - 1, this.heap);
    let valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
    // Write your code here.
  }
  swap(i, j, heap) {
    return ([heap[i], heap[j]] = [heap[j], heap[i]]);
  }
}
