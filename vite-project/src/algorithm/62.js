function solution(arr, n) {
  function rotate(arr) {
    // 배열의 크기와 동일한 2차원 배열 생성
    const n = arr.length;
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - i - 1] = arr[i][j];
      }
    }

    return rotated;
  }

  // 원본 배열 복사
  let rotated = arr.map((row) => [...row]);

  // n번 회전
  for (let i = 0; i < n; i++) {
    rotated = rotate(rotated);
  }

  return rotated;
}

export default solution;
