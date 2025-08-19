function solution(s) {
  // 알파벳 개수(26개) 만큼 빈도수 배열 생성
  const counts = Array(26).fill(0);

  // 빈도수 배열에 각 문자의 빈도수를 채운다.
  for (const c of s) {
    // 인덱스 0부터 빈도수를 저장하기 위해 a의 아스키코드 값을 뺀다.
    counts[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  // 빈도수 배열을 순회하면서 정렬된 문자열 생성
  let sortedStr = "";
  for (let i = 0; i < 25; i++) {
    sortedStr += String.fromCharCode(i + "a".charCodeAt(0)).repeat(counts[i]);
  }

  return sortedStr;
}

console.log(solution("hello")); // 'ehllo'
console.log(solution("algorithm")); // 'aghilmort'
