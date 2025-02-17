// 최대 힙 클래스 구현
class MaxHeap {
    constructor() {
      this.heap = [];
    }
    
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
    
    getLeftIndex(index) {
      return index * 2 + 1;
    }
    
    getRightIndex(index) {
      return index * 2 + 2;
    }
    
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    push(val) {
      this.heap.push(val);
      this.heapifyUp();
    }
    
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] < this.heap[index]) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
    
    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
      
      const maxValue = this.heap[0];
      // 마지막 값을 루트로 가져온 후, 힙을 재정렬
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return maxValue;
    }
    
    heapifyDown() {
      let index = 0;
      const length = this.heap.length;
      
      while (this.getLeftIndex(index) < length) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        let largerChildIndex = leftIndex;
        
        if (rightIndex < length && this.heap[rightIndex] > this.heap[leftIndex]) {
          largerChildIndex = rightIndex;
        }
        
        if (this.heap[index] < this.heap[largerChildIndex]) {
          this.swap(index, largerChildIndex);
          index = largerChildIndex;
        } else {
          break;
        }
      }
    }
    
    size() {
      return this.heap.length;
    }
  }
  
  // 야근 지수 문제의 solution 함수
  function solution(n, works) {
    // 모든 작업을 다 처리할 수 있는 경우 0을 반환
    const totalWork = works.reduce((sum, work) => sum + work, 0);
    if (totalWork <= n) return 0;
    
    // 최대 힙 생성 및 초기 작업량 추가
    const maxHeap = new MaxHeap();
    works.forEach(work => maxHeap.push(work));
    
    // n 시간 동안 가장 큰 작업량을 1씩 줄임
    for (let i = 0; i < n; i++) {
      let currentMax = maxHeap.pop();
      currentMax = currentMax - 1;
      maxHeap.push(currentMax);
    }
    
    // 최종 야근 지수 계산 (각 작업량의 제곱 합)
    let answer = 0;
    while (maxHeap.size() > 0) {
      answer += Math.pow(maxHeap.pop(), 2);
    }
    
    return answer;
  }