class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

function solution(graph, start) {
  // 그래프를 인접 리스트로 구현
  const adjList = {};

  graph.forEach(([node, v]) => {
    if (!adjList[node]) {
      adjList[node] = [];
    }

    adjList[node].push(v);
  });

  const visited = new Set();

  const queue = new Queue();
  // 노드를 큐에 넣고 방문 처리
  queue.push(start);
  visited.add(start);
  const result = [start];

  while (!queue.isEmpty()) {
    // 큐에서 현재 노드를 꺼낸다.
    const node = queue.pop();

    // 현재 노드와 인접한 노드를 방문한 적이 없다면 방문한다.
    adjList[node]?.forEach((nextNode) => {
      if (!visited.has(nextNode)) {
        queue.push(nextNode);
        visited.add(nextNode);
        result.push(nextNode);
      }
    });
  }

  return result;
}
