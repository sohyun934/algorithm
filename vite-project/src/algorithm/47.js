function solution(N) {
  // 조합의 결과를 담은 배열
  const results = [];

  function backtrack(sum, selectedNums, start) {
    // 합계 10이 되면 결과 배열에 추가
    if (sum === 10) {
      results.push(selectedNums);
      return;
    }

    for (let i = start; i <= N; i++) {
      if (sum + i <= 10) {
        backtrack(sum + i, selectedNums.concat(i), i + 1);
      }
    }
  }

  backtrack(0, [], 1);
  return results;
}

export { solution };
